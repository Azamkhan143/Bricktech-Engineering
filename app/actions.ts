'use server'
import mongoose from 'mongoose';
import { Lead } from './models.leads';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContactForm(formData: FormData) {
  const name = formData.get('fullName') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  try {
    // 1. Connect to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI!);
    }

    // 2. Save to Database
    await Lead.create({ fullName: name, phone, service, message });

    // 3. Send Email Notification to YOU
    await resend.emails.send({
      from: 'BrickTech <onboarding@resend.dev>',
      to: 'your-email@gmail.com', // Your personal email
      subject: `New Lead: ${service} - ${name}`,
      html: `
        <h1>New Project Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}