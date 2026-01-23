import ContactMessage from "../models/ContactMessage.js";
import nodemailer from "nodemailer";

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contactMessage = await ContactMessage.create({
      name,
      email,
      message,
    });

    // Send email notification (Background)
    if (
      process.env.EMAIL_HOST &&
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 465, // Use SSL
        secure: true, // Use SSL
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        connectionTimeout: 30000,
      });

      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }).then((info) => {
        console.log(`> Email sent successfully: ${info.messageId}`);
      }).catch((emailError) => {
        console.error("> Email notification failed:", emailError.message);
      });
    }

    res.status(201).json({
      success: true,
      message: "Thank you for your message. I will get back to you soon!",
      data: {
        id: contactMessage._id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit message. Please try again.",
      error: error.message,
    });
  }
};

// @desc    Get all messages (Admin)
// @route   GET /api/contact
// @access  Private (Admin)
export const getMessages = async (req, res) => {
  try {
    const { read, page = 1, limit = 20 } = req.query;
    let query = {};

    if (read !== undefined) {
      query.read = read === "true";
    }

    const skip = (page - 1) * limit;
    const total = await ContactMessage.countDocuments(query);
    const messages = await ContactMessage.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res.status(200).json({
      success: true,
      count: messages.length,
      total,
      pages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      data: messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// @desc    Mark message as read
// @route   PUT /api/contact/:id/read
// @access  Private (Admin)
export const markAsRead = async (req, res) => {
  try {
    const message = await ContactMessage.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    res.status(200).json({
      success: true,
      data: message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// @desc    Delete message
// @route   DELETE /api/contact/:id
// @access  Private (Admin)
export const deleteMessage = async (req, res) => {
  try {
    const message = await ContactMessage.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
