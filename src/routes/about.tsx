import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Target, Eye, Heart, BookOpen, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Millennium World School" },
      { name: "description", content: "Discover the legacy, vision, and mission of Millennium World School in Orai, UP." },
      { property: "og:title", content: "About Millennium World School" },
      { property: "og:description", content: "Three decades of academic excellence and holistic education in Orai, UP." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Our Mission", text: "To deliver world-class education that nurtures intellectual curiosity, ethical character, and global citizenship." },
  { icon: Eye, title: "Our Vision", text: "To be the most respected educational institution shaping confident, compassionate leaders of tomorrow." },
  { icon: Heart, title: "Our Values", text: "Integrity, Excellence, Innovation, Respect, and Responsibility guide every action we take." },
];

const milestones = [
  { year: "1995", title: "Founded", text: "Established with a vision to transform education in Orai, UP." },
  { year: "2005", title: "CBSE Affiliation", text: "Achieved full CBSE affiliation and expanded to senior secondary." },
  { year: "2015", title: "Smart Campus", text: "Launched fully digital classrooms and integrated learning systems." },
  { year: "2024", title: "Digital ERP", text: "Deployed end-to-end ERP for academics, fees, and parent engagement." },
];

function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-sm font-medium mb-4">
              Established 1995
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Millennium World School</h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Three decades of shaping young minds in Orai, Uttar Pradesh — combining academic rigor with character building and digital-first learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 1995 with just 80 students, Millennium World School has grown into one of Orai's most trusted educational institutions, today serving over 2,500 students across pre-primary to senior secondary.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our journey is rooted in a simple belief: every child deserves an education that prepares them not just for exams, but for life. We blend the structured CBSE curriculum with experiential learning, creative arts, sports, and technology.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: "2,500+ Students" },
              { icon: BookOpen, label: "150+ Faculty" },
              { icon: Award, label: "28+ Years" },
              { icon: Target, label: "100% Results" },
            ].map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-xl p-5 text-center">
                <s.icon className="h-8 w-8 mx-auto mb-2 text-secondary" />
                <p className="text-sm font-semibold text-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-12">Our Journey</h2>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 items-start"
              >
                <div className="shrink-0 h-16 w-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold font-heading">
                  {m.year}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold font-heading text-foreground">{m.title}</h3>
                  <p className="text-muted-foreground">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
