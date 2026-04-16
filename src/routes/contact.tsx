import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Millennium World School" },
      { name: "description", content: "Get in touch with Millennium World School." },
    ],
  }),
  component: () => <ComingSoon title="Contact Us" description="Reach out to us for admissions, queries, feedback, or campus visits. Our team is here to help." />,
});
