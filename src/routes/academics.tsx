import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, Beaker, Calculator, Globe2, Palette, Music, Trophy, Laptop } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Millennium World School" },
      { name: "description", content: "Explore our CBSE curriculum, programs, and co-curricular offerings from Pre-Primary to Senior Secondary." },
      { property: "og:title", content: "Academics — Millennium World School" },
      { property: "og:description", content: "CBSE curriculum with Science, Commerce, and Humanities streams." },
    ],
  }),
  component: AcademicsPage,
});

const stages = [
  { name: "Pre-Primary", grades: "Nursery – KG", text: "Play-based learning with focus on motor skills, language, and social development.", color: "bg-secondary/10 text-secondary" },
  { name: "Primary", grades: "Class I – V", text: "Foundational literacy & numeracy with art, music, and physical education.", color: "bg-primary/10 text-primary" },
  { name: "Middle School", grades: "Class VI – VIII", text: "Conceptual learning across Science, Math, Social Studies, and Languages.", color: "bg-accent/10 text-accent" },
  { name: "Secondary", grades: "Class IX – X", text: "CBSE curriculum preparing students for board examinations with project-based learning.", color: "bg-secondary/10 text-secondary" },
  { name: "Senior Secondary", grades: "Class XI – XII", text: "Specialized streams: Science, Commerce, and Humanities with career counseling.", color: "bg-primary/10 text-primary" },
];

const subjects = [
  { icon: Calculator, name: "Mathematics" },
  { icon: Beaker, name: "Science" },
  { icon: Globe2, name: "Social Studies" },
  { icon: BookOpen, name: "Languages" },
  { icon: Laptop, name: "Computer Science" },
  { icon: Palette, name: "Visual Arts" },
  { icon: Music, name: "Performing Arts" },
  { icon: Trophy, name: "Physical Education" },
];

function AcademicsPage() {
  return (
    <div className="bg-background">
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-sm font-medium mb-4">
              CBSE Affiliated
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Academic Excellence</h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              A holistic curriculum spanning Pre-Primary to Senior Secondary, designed to develop strong academic foundations alongside critical thinking and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-12">Academic Stages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${s.color}`}>{s.grades}</div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-3">Subjects We Offer</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A balanced curriculum that combines academics, arts, sports, and technology.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjects.map((sub, i) => (
              <motion.div
                key={sub.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-5 text-center hover:border-secondary transition-colors"
              >
                <sub.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold text-foreground">{sub.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-12">Senior Secondary Streams</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Science", subjects: "Physics, Chemistry, Mathematics/Biology, English, Computer Science", color: "border-primary" },
              { name: "Commerce", subjects: "Accountancy, Business Studies, Economics, English, Mathematics", color: "border-secondary" },
              { name: "Humanities", subjects: "History, Political Science, Geography, English, Psychology", color: "border-accent" },
            ].map((stream) => (
              <div key={stream.name} className={`bg-card border-t-4 ${stream.color} border border-border rounded-2xl p-6`}>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-3">{stream.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{stream.subjects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
