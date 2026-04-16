import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Millennium World School" },
      { name: "description", content: "Apply for admission to Millennium World School for the 2025-26 session." },
    ],
  }),
  component: () => <ComingSoon title="Admissions" description="Online admission forms, eligibility criteria, fee structure, and important dates for the 2025-26 academic session." />,
});
