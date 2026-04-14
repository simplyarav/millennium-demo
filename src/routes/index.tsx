import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  BookOpen, Users, Award, GraduationCap,
  Monitor, CreditCard, ShieldCheck, BarChart3,
  ArrowRight, Star, Clock, Globe
} from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green Valley International School — Empowering Minds, Shaping Futures" },
      { name: "description", content: "A premier CBSE-affiliated school with integrated ERP, online fee payment, and digital academic management." },
      { property: "og:title", content: "Green Valley International School" },
      { property: "og:description", content: "Empowering Minds, Shaping Futures since 1995." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { icon: Users, value: "2,500+", label: "Students" },
  { icon: GraduationCap, value: "150+", label: "Expert Faculty" },
  { icon: Award, value: "28+", label: "Years of Excellence" },
  { icon: Globe, value: "100%", label: "Digital Campus" },
];

const features = [
  {
    icon: Monitor,
    title: "Integrated ERP System",
    description: "Complete school management with student records, attendance tracking, and academic reports — all in one place.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    title: "Online Fee Payment",
    description: "Secure and convenient online fee payment portal with instant receipts and payment history tracking.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: BarChart3,
    title: "Academic Dashboard",
    description: "Teachers update marks and attendance digitally. Students and parents can track progress in real time.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: ShieldCheck,
    title: "Admin Control Panel",
    description: "Complete administrative control — manage students, teachers, classes, and monitor the entire institution.",
    color: "bg-primary/10 text-primary",
  },
];

const highlights = [
  { icon: Star, text: "CBSE Affiliated" },
  { icon: Clock, text: "Smart Classrooms" },
  { icon: BookOpen, text: "Digital Library" },
  { icon: Globe, text: "Multilingual Education" },
];

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Green Valley School Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground/90">Admissions Open 2025-26</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary-foreground leading-tight mb-6">
              Empowering Minds,<br />
              <span className="text-secondary">Shaping Futures</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed max-w-xl">
              A premier institution committed to academic excellence, holistic development, and digital-first education with integrated ERP and online management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-accent transition-colors"
              >
                Login Portal <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground font-semibold border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10 mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl p-5 shadow-lg border text-center">
              <stat.icon className="h-6 w-6 mx-auto text-secondary mb-2" />
              <div className="text-2xl font-bold font-heading text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Highlights strip */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-wrap justify-center gap-6">
          {highlights.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10">
              <item.icon className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
              Digital-First School Management
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our integrated technology platform connects students, teachers, parents, and administrators for a seamless educational experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`h-12 w-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold font-heading text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-10 md:p-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mb-4">
              Ready to Join Our Family?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Discover a world-class education where technology meets tradition. Apply for the 2025-26 academic session today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-accent transition-colors"
              >
                Apply for Admission <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground font-semibold border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
