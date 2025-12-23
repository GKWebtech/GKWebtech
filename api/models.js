import mongoose from "mongoose";

// Lead Schema (Contact Form)
const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  source: { type: String, enum: ['contact_form', 'brochure_request'], required: true },
  serviceInterested: { type: String },
  projectDetails: { type: String },
  brochureRequested: { type: String },
  date: { type: Date, default: Date.now }
});

// Brochure Schema
const BrochureSchema = new mongoose.Schema({
  serviceId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  filePath: { type: String, required: true }
});

// Project Schema
const ProjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Slug ID for URL
  title: String,
  location: String,
  category: String,
  description: String,
  image: String,
  tags: [String],
  mediaStats: { 
    photos: Number, 
    videos: Number 
  },
  client: String,
  duration: String,
  challenge: String,
  solution: String,
  results: [String],
  testimonial: {
    text: String,
    author: String,
    role: String
  },
  gallery: [String],
  videos: [String]
});

// Team Member Schema
const TeamSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String,
  linkedin: String,
  github: String
});

// Testimonial Schema
const TestimonialSchema = new mongoose.Schema({
  text: String,
  name: String,
  role: String,
  rating: Number,
  image: String
});

// Prevent OverwriteModelError
const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
const Brochure = mongoose.models.Brochure || mongoose.model('Brochure', BrochureSchema);
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
const TeamMember = mongoose.models.TeamMember || mongoose.model('TeamMember', TeamSchema);
const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);

export { Lead, Brochure, Project, TeamMember, Testimonial };
