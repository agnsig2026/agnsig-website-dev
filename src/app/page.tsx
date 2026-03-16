import ScrollUp from "@/components/Common/ScrollUp";
import Talks from "@/components/Talks";
import News from "@/components/News/News";
import TeamMember from "@/components/TeamMember";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NASA AGN SIG",
  description: "This website is managed directly by the Leadership Council.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <section id="news" className="scroll-mt-24">
        <News />
      </section>

      <section id="talks" className="scroll-mt-24">
        <Talks />
      </section>

      <section id="team" className="scroll-mt-24">
        <TeamMember />
      </section>
    </>
  );
}
