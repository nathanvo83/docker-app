// should be imported first
import "dotenv/config";

// import others js file
import express from "express";
import cors from "cors";
import https from "https";
import fs from "fs";

const PORT = process.env.PORT;
const app = express();

// const key = fs.readFileSync(__dirname + "/../cert/api.key");
// const cert = fs.readFileSync(__dirname + "/../cert/api.crt");
// const credentials = { key, cert };

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});

app.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

// const server = https.createServer(credentials, app);
// server.listen(3002);

app.listen(PORT, () => console.log(`api listening on port ${PORT}`));

// console.log("Hello Node.js project.");
// console.log(process.env.MY_SECRET, PORT);
