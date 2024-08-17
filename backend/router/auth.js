const express = require('express');
const router = express.Router();
const db = require('../db'); // Adjust the path to your database connection
const nodemailer = require("nodemailer");
const { generateToken , verifyToken } = require('../controller/jwtToken');

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    host: "consulting.prabisha.com",
    port: 587,
    secure: false,
    auth: {
        user: "info@prabisha.com",
        pass: "ElzAeL6n",
    },
});

transporter.verify((error) => {
    if (error) {
        console.error("Nodemailer verification failed:", error);
    } else {
        console.log("Nodemailer is ready!");
    }
});

// Helper function to set token in cookie

// Register route// Register route
router.post("/register", async (req, res) => {
  try {
      const { username, email, password } = req.body;
      const role = "user"; // Adjust the role based on your application requirements

      // Check if the email or username already exists in the database
      const emailCheckQuery = "SELECT * FROM users WHERE email = ?";
      const usernameCheckQuery = "SELECT * FROM users WHERE username = ?";
      const [emailResults] = await db.query(emailCheckQuery, [email]);
      const [usernameResults] = await db.query(usernameCheckQuery, [username]);

      if (emailResults.length > 0) {
          return res.status(409).json({ success: false, message: "Email is already registered" });
      }

      if (usernameResults.length > 0) {
          return res.status(409).json({ success: false, message: "Username is already taken" });
      }

      // Insert the new user into the database
      const insertQuery = `
          INSERT INTO users (username, email, password , role)
          VALUES (?, ?, ?, ?)
      `;
      const [result] = await db.query(insertQuery, [username, email, password , role]);

      if (result.affectedRows === 1) {
          const userId = result.insertId;

          // Generate a JWT token
          const token = generateToken({ userId, username, email , role }, 'yourSecretKey', { expiresIn: '1h' });

          // Send email with login details
          const mailOptions = {
              from: "info@prabisha.com",
              to: email,
              subject: "Registration Successful - Login Details",
              text: `Dear ${username},\n\nYour registration was successful. Here are your login details:\n\nEmail: ${email}\nPassword: ${password}\n\nThank you for registering with us.\n\nBest Regards,\nPrabisha Team`,
          };

          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  return res.status(500).json({
                      success: false,
                      message: "Registration successful, but failed to send email",
                  });
              } else {
                  res.status(201).json({
                      success: true,
                      message: "User registered successfully and email sent",
                      token, // Include the token in the response
                  });
              }
          });
      } else {
          res.status(500).json({ success: false, message: "Failed to register user" });
      }
  } catch (error) {
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
      const { usernameOrEmail, password } = req.body;

      // Adjusted query to search by either username or email
      const query = "SELECT user_id, username, email, role, password FROM users WHERE username = ? OR email = ?";
      const [results] = await db.query(query, [usernameOrEmail, usernameOrEmail]);

      if (results.length > 0) {
          const user = results[0];

          if (password === user.password) {
              // Generate a JWT token
              const token = generateToken({ 
                  userId: user.user_id, 
                  username: user.username, 
                  email: user.email,
                  role: user.role 
              }, 'yourSecretKey', { expiresIn: '1h' });

              res.status(200).json({
                  success: true,
                  message: "Login successful",
                  token,
                  role: user.role // Include the token in the response
              });
          } else {
              res.status(401).json({ success: false, message: "Wrong username/email or password" });
          }
      } else {
          res.status(401).json({ success: false, message: "Wrong username/email or password" });
      }
  } catch (error) {
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.get('/verify', (req, res) => {
  
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
      return res.status(401).json({ message: 'Token missing' });
  }

  const decoded = verifyToken(token, "yourSecretKey" );

  if (decoded) {

      // Token is valid; return the decoded user data
      return res.status(200).json({ user: decoded });
  } else {
      // Token is invalid or expired
      return res.status(403).json({ message: 'Invalid or expired token' });
  }
});

module.exports = router;
