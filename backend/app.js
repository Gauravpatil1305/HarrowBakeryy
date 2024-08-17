const express = require("express");
const db = require("./db"); // Make sure this path is correct
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./router/auth")
const productRouter  = require("./router/product")
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





app.get('/', async (req, res) => {
 res.send('Hello Devdeep!');
});

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
  console.log(`Server started on port http://localhost:${port}`);
});
