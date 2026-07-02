import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function buildEmailHtml(fields) {
  const rows = Object.entries(fields)
    .map(([label, val]) => `<tr><td style="padding:8px;font-weight:bold">${label}:</td><td style="padding:8px">${val || "Not specified"}</td></tr>`)
    .join("");
  return `<h2>New Contact Form Submission</h2><table style="border-collapse:collapse;width:100%">${rows}</table>`;
}

function sendEmail(subject, fields) {
  transporter.sendMail({
    from: `"${fields.name}" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: fields.email,
    subject,
    html: buildEmailHtml(fields),
  }).catch(err => console.error("Email send failed:", err));
}

app.post("/api/contact", (req, res) => {
  const { name, phone, email, service, message } = req.body;
  res.json({ success: true });
  sendEmail(`New Contact Form Submission from ${name}`, { name, phone, email, Service: service, message });
});

app.post("/api/contact-quick", (req, res) => {
  const { name, email, phone, message } = req.body;
  res.json({ success: true });
  sendEmail(`Quick Contact from ${name}`, { name, email, phone, message });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
