import Contact from "../models/contact.js";
import { sendContactEmails } from "../services/emailService.js";

export const submitContact = async (req, res) => {
    try {
        const { name, email, phone, courseCategory, course } = req.body || {};
        if (!name || !email, !phone, !courseCategory, !course) {
            return res.status(400).json({ success: false, message: "All Fields are must be required..." });
        }

        const created = await Contact.create({ name, email, phone, courseCategory, course });

        sendContactEmails(created)
            .then(() => console.log("📧 Emails sent"))
            .catch(err => console.error("❌ Email sending failed:", err.message));

        return res.status(201).json({ success: true, message: "Contact saved." });
    } catch (err) {
        console.error("Contact controller error:", err);
        return res.status(500).json({ success: false, message: "Server errors." })
    }
};