import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/erp")({
  head: () => ({
    meta: [
      { title: "ERP System — Millennium World School" },
      { name: "description", content: "Integrated ERP for managing students, teachers, attendance, and academic records." },
    ],
  }),
  component: () => <ComingSoon title="ERP System" description="A fully integrated Enterprise Resource Planning system for student management, attendance, marks, timetables, and more." />,
});
