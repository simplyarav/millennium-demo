import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, Calendar, CheckCircle2, Download, ClipboardCheck, UserCheck, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2025-26 — Millennium World School" },
      { name: "description", content: "Apply for admission to Millennium World School, Orai. Process, eligibility, fees, and important dates." },
      { property: "og:title", content: "Admissions Open 2025-26" },
      { property: "og:description", content: "Join Millennium World School — apply online for the 2025-26 academic session." },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  { icon: Download, title: "Download Form", text: "Get the application form online or collect from the school office." },
  { icon: ClipboardCheck, title: "Submit Application", text: "Fill in details and submit with required documents and fee." },
  { icon: UserCheck, title: "Interaction", text: "Student and parent interaction with the admissions team." },
  { icon: GraduationCap, title: "Confirmation", text: "Receive admission confirmation and complete fee payment." },
];

const documents = [
  "Birth Certificate (original + copy)",
  "Previous school transfer/leaving certificate",
  "Last 2 years' report cards",
  "4 passport-size photographs",
  "Aadhaar card copy of student & parents",
  "Address proof",
];

const dates = [
  { label: "Applications Open", date: "15 Nov 2024" },
  { label: "Last Date to Apply", date: "28 Feb 2025" },
  { label: "Interaction Sessions", date: "Mar 2025" },
  { label: "Admission Confirmation", date: "Apr 2025" },
  { label: "Session Begins", date: "01 Apr 2025" },
];

function AdmissionsPage() {
  return (
    <div className="bg-background">
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-sm font-medium mb-4 animate-pulse">
              Admissions Open 2025-26
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Join Our Family</h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Begin your child's journey toward academic excellence and lifelong learning at Millennium World School.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-12">Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Step {i + 1}
                </div>
                <div className="h-14 w-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold font-heading text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-secondary" />
              <h3 className="text-2xl font-bold font-heading text-foreground">Important Dates</h3>
            </div>
            <ul className="space-y-3">
              {dates.map((d) => (
                <li key={d.label} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                  <span className="text-foreground">{d.label}</span>
                  <span className="font-semibold text-primary">{d.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-secondary" />
              <h3 className="text-2xl font-bold font-heading text-foreground">Required Documents</h3>
            </div>
            <ul className="space-y-3">
              {documents.map((doc) => (
                <li key={doc} className="flex items-start gap-2 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center bg-primary text-primary-foreground rounded-3xl p-10">
          <h2 className="text-3xl font-bold font-heading mb-3">Ready to Apply?</h2>
          <p className="text-primary-foreground/80 mb-6">Reach out to our admissions team for any queries — we're here to help.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:admissions@millenniumworldschool.edu" className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-accent transition-colors">
              Email Admissions
            </a>
            <a href="tel:+919876543210" className="px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors">
              Call +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
