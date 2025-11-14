import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const verifyTransporter = async () => {
    try {
        await transporter.verify();
        console.log("✅ Email transporter verified")
    }
    catch (err) {
        console.error("❌ Email transporter verify failed:", err.message)
    }
};


export const sendContactEmails = async (contact) => {
    const { name, email, phone, courseCategory, course } = contact

    const adminMail = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `📩 New Contact Form from RLT Institute of Agriculture and Horticulture - ${name}`,
        text:
            `New contact submission:
            \n\nName: ${name}
            \nEmail: ${email}
            \nPhone: ${phone}
            \nCategory: ${courseCategory}
            \nCourse: ${course}`
    }

    const userMail = {
        from: process.env.EMAIL_USER,
        to: email,
        subject:`✅ Thank you for contacting us `,
        text:
        `Hello ${name},\n\nThank you for contacting us about "${course}". We have received your Enquiry and will reach out soon.
        \n\nRegards
        \n Team`,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);
};