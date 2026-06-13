"use client";

import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Web3Forms access key
    const accessKey = "648edc21-797d-4b9c-bdb7-9ef572dbe34e";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again.");
    }
  };

  return (
    <footer className="bg-[#050505] py-32 px-8 md:px-24 border-t border-white/[0.05] relative z-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Let's Work Together
          </h2>
          <p className="text-white/60 text-lg">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-6 bg-white/[0.02] p-8 md:p-12 rounded-3xl border border-white/[0.05]">
          
          {status === "success" && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
              <CheckCircle2 className="w-5 h-5" />
              <p>Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
              <AlertCircle className="w-5 h-5" />
              <p>{errorMessage}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-white/60 ml-1">Name</label>
              <input 
                id="name"
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe" 
                disabled={status === "submitting"}
                className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all disabled:opacity-50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-white/60 ml-1">Email</label>
              <input 
                id="email"
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com" 
                disabled={status === "submitting"}
                className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all disabled:opacity-50"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm text-white/60 ml-1">Subject</label>
            <input 
              id="subject"
              type="text" 
              required
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              placeholder="Project Inquiry" 
              disabled={status === "submitting"}
              className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-white/60 ml-1">Message</label>
            <textarea 
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Tell me about your project..." 
              disabled={status === "submitting"}
              className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-none disabled:opacity-50"
            />
          </div>

          <button 
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-4 rounded-xl hover:bg-white/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-16 text-center">
          <p className="text-white/40 mb-6 text-sm">Or reach out directly at:</p>
          <div className="flex flex-col items-center gap-4">
            <a 
              href="mailto:sedhaisuyogya90@gmail.com"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              sedhaisuyogya90@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/suyogya-sedhai-446620388/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-[#0a66c2] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-32 text-sm text-white/30">
          © {new Date().getFullYear()} Suyogya Sedhai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
