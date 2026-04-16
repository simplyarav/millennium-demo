import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Millennium World School" },
      { name: "description", content: "Explore our comprehensive CBSE curriculum and academic programs." },
    ],
  }),
  component: () => <ComingSoon title="Academics" description="Our comprehensive CBSE-affiliated curriculum, smart classroom initiatives, and academic programs — all coming soon." />,
});
