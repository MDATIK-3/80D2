import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = process.env.PORT || 5000;
console.log(22222)

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "", 
    pass: "", 
  },
});

app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, companyName, message } = req.body;

  const mailOptions = {
    from: email,
    to: "221902046@student.green.edu.bd",
    subject: `New message from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${companyName}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email: " + error.message);
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
