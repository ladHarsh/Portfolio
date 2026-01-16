import express from "express";
import { body, validationResult } from "express-validator";
import {
  submitContactForm,
  getMessages,
  markAsRead,
  deleteMessage,
} from "../controllers/contactController.js";

const router = express.Router();

const validateContactForm = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 100 })
    .withMessage("Name cannot exceed 100 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address"),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ max: 2000 })
    .withMessage("Message cannot exceed 2000 characters"),
];

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array(),
    });
  }
  next();
};

router
  .route("/")
  .get(getMessages)
  .post(validateContactForm, handleValidation, submitContactForm);

router.route("/:id/read").put(markAsRead);

router.route("/:id").delete(deleteMessage);

export default router;
