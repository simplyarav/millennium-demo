import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fee Payment — Millennium World School" },
      { name: "description", content: "Secure online fee payment portal with instant receipts." },
    ],
  }),
  component: () => <ComingSoon title="Fee Payment" description="Secure online fee payment gateway with instant digital receipts, payment history, and multiple payment options." />,
});
