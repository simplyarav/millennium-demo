import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Eye, EyeOff, User, Lock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login Portal — Millennium World School" },
      { name: "description", content: "Access the student, teacher, or admin portal." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [role, setRole] = useState<"student" | "teacher" | "admin">("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const roles = [
    { key: "student" as const, label: "Student" },
    { key: "teacher" as const, label: "Teacher" },
    { key: "admin" as const, label: "Admin" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo — no actual login
    alert(`Demo Mode: ${role} login with ${email}. Full authentication coming soon!`);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-card rounded-2xl shadow-xl border overflow-hidden">
          {/* Header */}
          <div className="bg-primary px-8 py-8 text-center">
            <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-secondary/20 flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-2xl font-bold font-heading text-primary-foreground">Welcome Back</h1>
            <p className="text-sm text-primary-foreground/60 mt-1">Sign in to your portal</p>
          </div>

          {/* Role Selector */}
          <div className="px-8 pt-6">
            <div className="flex rounded-lg bg-muted p-1 gap-1">
              {roles.map((r) => (
                <button
                  key={r.key}
                  onClick={() => setRole(r.key)}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                    role === r.key
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {role === "student" ? "Student ID / Email" : "Email Address"}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={role === "student" ? "Enter student ID or email" : "Enter your email"}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" className="rounded border-border" />
                Remember me
              </label>
              <button type="button" className="text-secondary hover:text-accent font-medium transition-colors">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-accent transition-colors"
            >
              Sign In <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="px-8 pb-6 text-center">
            <p className="text-xs text-muted-foreground">
              Having trouble? Contact IT support at <span className="text-secondary">support@millenniumworldschool.edu</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
