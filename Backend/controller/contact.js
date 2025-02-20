import Contact from "../models/contact.models.js";

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }   
    const createContact = await Contact.create({ name, email, message });
    if (createContact) {
      console.log("Contact successfully created");
      return res.status(201).json({ message: "Contact is successfully created", data: createContact });
    } else {
      console.log("Failed to create contact");
      return res.status(500).json({ error: "Something went wrong while saving the contact" });
    }
  } catch (error) {
    console.error("Error creating contact:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export default contact