const express = require("express");
const db = require("./db"); // Make sure this path is correct
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const globalConfig = require("./config");
const { v4: uuidv4 } = require("uuid");
const authRouter = require("./router/auth")
const productRouter  = require("./router/product")
const serverLink = globalConfig.port;
const domain = globalConfig.domain;
const app = express();
const port = 8450;
 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "https://apis.prabisha.com",
    "http://localhost:3002",
    "https://prabisha-itsm.vercel.app",
    "https://itsm.prabisha.com",
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});



async function getUsersByRole(role) {
  const query = "SELECT user_id, name, email, phone, logo_url, role, location, company, created_at FROM users WHERE role = ?";
  const [results] = await db.query(query, [role]);
  return results;
}


async function getTicketsByUserId(userId) {
  const query = "SELECT * FROM tickets WHERE user_id = ?";
  const [results] = await db.query(query, [userId]);
  return results;
}

async function getUserById(userId) {
  const query = "SELECT * FROM users WHERE user_id = ?";
  const [results] = await db.query(query, [userId]);
  return results.length ? results[0] : null;
}

const fetchAssignedByUserId = async (userId) => {
  const query = "SELECT * FROM tickets WHERE assigned_to = ?";
  const [results] = await db.query(query, [userId]);
  return results;
};

async function getTicketById(ticketId) {
  const query = "SELECT * FROM tickets WHERE id = ?";
  const [results] = await db.query(query, [ticketId]);
  return results.length ? results[0] : null;
}



app.get("/"),
  async (req, res) => {
    res.status(200).json({
      success: false,
      message: "Welocome for new keyboard Devdeep Patidar",
    });
  };

/**
 * Fetches employee data from a remote API and returns it as a response.
 *
 * @returns {Promise<Object>} A Promise that resolves to the fetched employee data.
 */

// Use the register router for the /api/register endpoint
app.use('/api', authRouter);

// Use the product router for the /api/products endpoint
app.use('/api', productRouter);




 

// const array = [tsm12 , tsm13]
// Login endpoint (existing code)





app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
