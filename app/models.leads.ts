import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'New' }, // New, Contacted, Closed
  createdAt: { type: Date, default: Date.now },
});

// This prevents creating the model multiple times during Next.js hot reloads
export const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);