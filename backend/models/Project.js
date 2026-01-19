import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
      maxLength: [100, "Title cannot exceed 100 characters"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
      maxLength: [200, "Short description cannot exceed 200 characters"],
    },
    problemStatement: {
      type: String,
      required: [true, "Problem statement is required"],
    },
    solution: {
      type: String,
      required: [true, "Solution overview is required"],
    },
    architecture: {
      type: String,
      required: [true, "Architecture explanation is required"],
    },
    techStack: [
      {
        type: String,
        required: true,
      },
    ],
    features: [mongoose.Schema.Types.Mixed],
    outcome: {
      type: String,
      required: [true, "Outcome/impact is required"],
    },
    liveUrl: {
      type: String,
      default: null,
    },
    videoUrl: {
      type: String,
      default: null,
    },
    engineStatus: {
      type: Object,
      default: null,
    },
    githubUrl: {
      type: String,
      required: [true, "GitHub repository URL is required"],
    },
    thumbnail: {
      type: String,
      default: null,
    },
    thumbnailLight: {
      type: String,
      default: null,
    },
    category: {
      type: String,
      enum: ["web", "ai", "mobile", "fullstack", "edtech", "saas", "other"],
      default: "fullstack",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    demoCredentials: [
      {
        role: { type: String },
        email: { type: String },
        password: { type: String },
      },
    ],
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

projectSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  next();
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
