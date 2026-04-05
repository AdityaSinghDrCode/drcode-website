"use client";

import { useState, FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Thanks—we received your message. We'll reply within one business day, usually sooner.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message:
            data.error ||
            "We couldn't send your message. Check your connection and try again, or email hello@drcode.ai.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "We couldn't send your message. Try again in a moment, or email hello@drcode.ai.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-3xl border-2 border-border bg-card p-8 shadow-lg md:p-12">
        <h2 className="mb-4 text-center text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-3xl">
          Send us a message
        </h2>
        <p className="mb-8 text-center leading-relaxed text-muted-foreground">
          We typically reply within one business day (often sooner).
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-ring/25"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email <span className="text-brand">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-ring/25"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Subject <span className="text-brand">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-ring/25"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Message <span className="text-brand">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full resize-none rounded-xl border-2 border-input bg-background px-4 py-3 text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-ring/25"
              placeholder="Tell us more about your project or inquiry..."
            />
          </div>

          {status.type && (
            <div
              className={`p-4 rounded-xl text-sm font-medium ${
                status.type === "success"
                  ? "bg-green-50 text-green-800 border-2 border-green-200"
                  : "bg-red-50 text-red-800 border-2 border-red-200"
              }`}
              role="alert"
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending your message...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
