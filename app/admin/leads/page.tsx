import { Lead } from "../../models.leads"; // or "@/app/models/Lead"
import mongoose from 'mongoose';

export default async function AdminLeadsPage() {
  // 1. Connect to MongoDB (Always check state first)
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI!);
  }

  // 2. Fetch all inquiries from the 'Lead' collection
  const leads = await Lead.find({}).sort({ createdAt: -1 });

  return (
    <div className="pt-32 p-10 bg-brand-cream min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-brand-dark font-heading uppercase tracking-tighter">
          Project <span className="text-brand-orange">Inquiries</span>
        </h1>
        
        <div className="overflow-hidden border border-brand-tan/20 shadow-xl">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-brand-dark text-white text-xs uppercase tracking-widest">
                <th className="p-5 text-left">Date</th>
                <th className="p-5 text-left">Client Name</th>
                <th className="p-5 text-left">Service Required</th>
                <th className="p-5 text-left">Phone Number</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-tan/10">
              {leads.map((lead) => (
                <tr key={lead._id.toString()} className="hover:bg-brand-orange/5 transition-colors">
                  <td className="p-5 text-sm text-gray-500">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-5 font-bold text-brand-dark">{lead.fullName}</td>
                  <td className="p-5">
                    <span className="bg-brand-orange text-white px-3 py-1 text-[10px] font-bold uppercase">
                      {lead.service}
                    </span>
                  </td>
                  <td className="p-5 text-brand-dark font-medium">{lead.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {leads.length === 0 && (
            <div className="p-20 text-center text-gray-400 italic bg-white">
              No inquiries found yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}