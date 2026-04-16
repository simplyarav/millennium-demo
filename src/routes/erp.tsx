import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, BookOpen, ClipboardList, MessageSquare, Calendar, BarChart3, Bell, FileText, Shield } from "lucide-react";

export const Route = createFileRoute("/erp")({
  head: () => ({
    meta: [
      { title: "ERP System — Millennium World School" },
      { name: "description", content: "Integrated school ERP for academics, attendance, marks, fees, and parent communication." },
      { property: "og:title", content: "MWS ERP System" },
      { property: "og:description", content: "One platform for students, teachers, admin, and parents." },
    ],
  }),
  component: ErpPage,
});

const modules = [
  { icon: Users, title: "Student Management", text: "Complete student profiles, enrollment, and lifecycle tracking." },
  { icon: ClipboardList, title: "Attendance", text: "Daily digital attendance with real-time parent notifications." },
  { icon: BookOpen, title: "Academics", text: "Marks entry, gradebook, and report card generation." },
  { icon: Calendar, title: "Timetable", text: "Class schedules, exam calendars, and event planning." },
  { icon: BarChart3, title: "Analytics", text: "Performance dashboards for students, classes, and teachers." },
  { icon: MessageSquare, title: "Communication", text: "Notices, circulars, and direct messaging between school & parents." },
  { icon: FileText, title: "Reports", text: "Custom reports for academics, attendance, fees, and admissions." },
  { icon: Bell, title: "Notifications", text: "SMS, email, and push alerts for important updates." },
  { icon: Shield, title: "Role-Based Access", text: "Secure access for students, teachers, admin, and parents." },
];

const roles = [
  {
    title: "For Students",
    color: "bg-secondary text-secondary-foreground",
    items: ["View attendance & marks", "Access timetable & assignments", "Download report cards", "Pay fees online"],
  },
  {
    title: "For Teachers",
    color: "bg-primary text-primary-foreground",
    items: ["Mark daily attendance", "Enter marks & grades", "Upload assignments", "Communicate with parents"],
  },
  {
    title: "For Admin",
    color: "bg-accent text-accent-foreground",
    items: ["Add/manage students & staff", "Monitor school-wide analytics", "Manage fees & finances", "Generate reports"],
  },
];

function ErpPage() {
  return (
    <div className="bg-background">
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-sm font-medium mb-4">
              All-in-One Platform
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">MWS ERP System</h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-6">
              A unified digital platform connecting students, teachers, parents, and administration — everything you need to run a modern school.
            </p>
            <Link to="/login" className="inline-block px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-accent transition-colors">
              Access ERP Portal
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-3">Powerful Modules</h2>
          <p className="text-center text-muted-foreground mb-12">Everything you need under one roof</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-secondary/50 transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <m.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold font-heading text-foreground mb-1.5">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-12">Built for Every Role</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className={`px-6 py-4 ${r.color}`}>
                  <h3 className="text-xl font-bold font-heading">{r.title}</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
