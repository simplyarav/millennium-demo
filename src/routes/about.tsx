import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Green Valley International School" },
      { name: "description", content: "Learn about our legacy, vision, and commitment to excellence in education." },
    ],
  }),
  component: () => <ComingSoon title="About Us" description="Discover our rich legacy, our visionary leadership, and our unwavering commitment to nurturing tomorrow's leaders." />,
});
