"use strict";
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;
app.use(bodyParser.json());
app.use(express.static("client"));
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "./client/index.html");
});

const arr = [
  { test1: "test1-output" },
  { test2: "test2-output" },
  { test3: "test3-output" },
  { test4: "test4-output" },
];

app.get("/postimageTest1", (req, res) => {
  const data = req.body;
  const { imageText } = data;
  const obj = arr.filter((data) => {
    data.key = imageText;
  });

  if (obj && obj.length > 0) {
    res.sendFile(__dirname + "./client/index.html");
  }
});

app.post("/postimageTest1", (req, res) => {
  const data = req.body;
  const { imageText } = data;
  const obj = arr.filter((data) => {
    data.key = imageText;
  });

  if (obj && obj.length > 0) {
    res.sendFile(__dirname + "./client/index.html");
  }
});
app.get("/postimageTest2", (req, res) => {
  const data = req.body;
  const { imageText } = data;
  const obj = arr.filter((data) => {
    data.key = imageText;
  });

  if (obj && obj.length > 0) {
    res.sendFile(__dirname + "./client/index.html");
  }
});
app.post("/postimageTest2", (req, res) => {
  const data = req.body;
  const { imageText } = data;
  const obj = arr.filter((data) => {
    data.key = imageText;
  });

  if (obj && obj.length > 0) {
    res.sendFile(__dirname + "./client/index.html");
  }
});

app.post("/sendEmail", async (req, res) => {
  console.log("aaaaaaaaaaaaaaaaaaaaa");
  console.log(req.body);
  let testAccount = await nodemailer.createTestAccount();
  const { email, firstName, lastName, content } = req.body;
  console.log(req.body);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "info@deepaivision.in", // generated ethereal user
      pass: "=2Zk5Xk9.dF_pAb", // generated ethereal password
    },
  });

  const message = `
  First Name = ${firstName}\nLast Name = ${lastName}\nEmail = ${email}\nMessage = ${content}`;

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "info@deepaivision.in", // sender address
    to: "info@deepaivision.in", // list of receivers
    subject: "Hello ✔", // Subject line
    text: message, // plain text body
  });

  res.status(200).json({
    statusCode: "OK",
    status: "OK",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
