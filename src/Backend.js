const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/api/submit", async (req, res) => {
  const { token } = req.body;

  const secretKey = "YOUR_SECRET_KEY";
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
  );

  const { success } = response.data;
  if (success) {
    // Process form submission
    res.status(200).send("CAPTCHA verified successfully");
  } else {
    res.status(400).send("CAPTCHA verification failed");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
