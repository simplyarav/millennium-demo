import { motion } from "framer-motion";
import { Construction } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="mx-auto mb-6 h-20 w-20 rounded-2xl bg-secondary/10 flex items-center justify-center">
          <Construction className="h-10 w-10 text-secondary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">{title}</h1>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
          </span>
          <span className="text-sm font-medium text-primary">Coming Soon</span>
        </div>
      </motion.div>
    </div>
  );
}
