import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <span className="text-lg font-bold font-heading block">Green Valley</span>
                <span className="text-[10px] text-primary-foreground/60 tracking-widest uppercase">International School</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Nurturing young minds since 1995. Affiliated to CBSE, committed to academic excellence and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-secondary transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-secondary transition-colors">Admissions</Link></li>
              <li><Link to="/fees" className="hover:text-secondary transition-colors">Fee Payment</Link></li>
            </ul>
          </div>

          {/* Portal */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Portals</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/login" className="hover:text-secondary transition-colors">Student Login</Link></li>
              <li><Link to="/login" className="hover:text-secondary transition-colors">Teacher Login</Link></li>
              <li><Link to="/login" className="hover:text-secondary transition-colors">Admin Login</Link></li>
              <li><Link to="/erp" className="hover:text-secondary transition-colors">ERP System</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> 123 Education Lane, Knowledge City, India</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /><span>info@greenvalleyschool.edu</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Green Valley International School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
