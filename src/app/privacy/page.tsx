import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacy.title,
  description: privacy.summary,
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <LegalPage page={privacy} />;
}
