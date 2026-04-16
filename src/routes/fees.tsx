import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CreditCard, Lock, Receipt, Smartphone, Building2, IndianRupee } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fee Payment — Millennium World School" },
      { name: "description", content: "Secure online fee payment portal. Pay tuition, transport, and other fees instantly with digital receipts." },
      { property: "og:title", content: "Online Fee Payment" },
      { property: "og:description", content: "Pay school fees securely with instant receipts." },
    ],
  }),
  component: FeesPage,
});

const feeStructure = [
  { class: "Nursery – KG", tuition: "₹ 28,000", transport: "₹ 12,000", total: "₹ 40,000" },
  { class: "Class I – V", tuition: "₹ 36,000", transport: "₹ 14,000", total: "₹ 50,000" },
  { class: "Class VI – VIII", tuition: "₹ 42,000", transport: "₹ 14,000", total: "₹ 56,000" },
  { class: "Class IX – X", tuition: "₹ 48,000", transport: "₹ 16,000", total: "₹ 64,000" },
  { class: "Class XI – XII", tuition: "₹ 56,000", transport: "₹ 16,000", total: "₹ 72,000" },
];

function FeesPage() {
  const [studentId, setStudentId] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="bg-background">
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-sm font-medium mb-4">
              <Lock className="inline h-3 w-3 mr-1" /> Secure Payment Gateway
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Fee Payment</h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Pay school fees online quickly and securely. Receive instant receipts and track your payment history.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground">Quick Pay</h3>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo: Payment gateway integration would be initialized here.");
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Student ID</label>
                <input
                  type="text"
                  required
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="MWS2024XXXX"
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Amount (₹)</label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Proceed to Pay
              </button>
              <p className="text-xs text-muted-foreground text-center">
                <Lock className="inline h-3 w-3 mr-1" /> 256-bit SSL encrypted · PCI DSS compliant
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Payment Methods</h3>
            {[
              { icon: CreditCard, title: "Credit / Debit Card", text: "Visa, MasterCard, RuPay accepted" },
              { icon: Smartphone, title: "UPI / Wallet", text: "Pay via PhonePe, GPay, Paytm and more" },
              { icon: Building2, title: "Net Banking", text: "All major Indian banks supported" },
              { icon: Receipt, title: "Instant Receipt", text: "Digital receipt sent to email & SMS" },
            ].map((m) => (
              <div key={m.title} className="flex gap-3 items-start bg-card border border-border rounded-xl p-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <m.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{m.title}</p>
                  <p className="text-sm text-muted-foreground">{m.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-3">Annual Fee Structure</h2>
          <p className="text-center text-muted-foreground mb-10">Indicative fees for the 2025-26 academic session</p>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 font-heading">Class</th>
                    <th className="px-6 py-4 font-heading">Tuition</th>
                    <th className="px-6 py-4 font-heading">Transport</th>
                    <th className="px-6 py-4 font-heading">Annual Total</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((row, i) => (
                    <tr key={row.class} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <td className="px-6 py-4 font-medium text-foreground">{row.class}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.tuition}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.transport}</td>
                      <td className="px-6 py-4 font-bold text-primary">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            * Fees may be paid quarterly. Examination, lab, and activity charges billed separately.
          </p>
        </div>
      </section>
    </div>
  );
}
