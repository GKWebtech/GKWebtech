import connectToDatabase from "./db.js";
import { Lead } from "./models.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    await connectToDatabase();

    const { name, email, phone, service, details } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and phone are required",
      });
    }

    const newLead = new Lead({
      name,
      email,
      phone,
      source: "contact_form",
      serviceInterested: service || null,
      projectDetails: details || null,
      createdAt: new Date(),
    });

    await newLead.save();

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}
