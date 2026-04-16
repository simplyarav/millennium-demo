import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Millennium World School" },
      { name: "description", content: "Reach Millennium World School in Orai, UP. Address, phone, email, and inquiry form." },
      { property: "og:title", content: "Contact Millennium World School" },
      { property: "og:description", content: "Get in touch with us — Orai, Uttar Pradesh, India." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-background">
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Get In Touch</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for admissions, queries, or to schedule a campus visit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <h2 className="text-2xl font-bold font-heading text-foreground mb-4">Contact Information</h2>
            {[
              { icon: MapPin, title: "Address", text: "Millennium World School, Civil Lines, Orai, Jalaun, Uttar Pradesh — 285001, India" },
              { icon: Phone, title: "Phone", text: "+91 98765 43210 / +91 98765 43211" },
              { icon: Mail, title: "Email", text: "info@millenniumworldschool.edu" },
              { icon: Clock, title: "Office Hours", text: "Monday – Saturday · 8:00 AM – 4:00 PM" },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                <div className="h-11 w-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-0.5">{c.title}</p>
                  <p className="text-sm text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}
            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Orai,Jalaun,Uttar+Pradesh,India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8 h-fit"
          >
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Send a Message</h2>
            {submitted ? (
              <div className="text-center py-12">
                <div className="h-16 w-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Send className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We've received your message and will respond shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                    <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input required type="tel" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input required type="email" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary">
                    <option>Admission Inquiry</option>
                    <option>Fee Related</option>
                    <option>Academic Query</option>
                    <option>General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
