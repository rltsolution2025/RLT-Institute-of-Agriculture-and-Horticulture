import express from "express";
import { submitContact } from "../controller/contactController.js";

const Router = express.Router();

Router.post("/", submitContact);

Router.get("/", async (req, res) => {
    try {
        const Contact = (await import("../models/contact.js")).default;
        const contacts = await Contact.find().sort({ createdAt: -1 }).limits(50);
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default Router;