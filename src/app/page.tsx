import { HeroSection } from "@/components/sections/HeroSection";
import { TopFrauds } from "@/components/sections/TopFrauds";
import { LearnByScenario } from "@/components/sections/LearnByScenario";
import { SafePractices } from "@/components/sections/SafePractices";
import { Videos } from "@/components/sections/Videos";
import { ReportFraud } from "@/components/sections/ReportFraud";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-background">
      <section id="home">
        <HeroSection />
      </section>

      <section id="top-frauds">
        <TopFrauds />
      </section>

      <section id="videos">
        <Videos />
      </section>

      <section id="activities">
        <LearnByScenario />
      </section>

      <section id="safe-practices">
        <SafePractices />
      </section>

      <section id="report-fraud">
        <ReportFraud />
      </section>
    </main>
  );
}
