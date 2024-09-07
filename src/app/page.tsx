import About from "./_components/about";
import FeatureSection from "./_components/feature";
import { IntroSection } from "./_components/intro-section";

export default function Home() {
  return (

    <main className="">
      <IntroSection />
      <About />
      <FeatureSection />

      <section id="investment">
        <h1 className="text-primary">Investment</h1>
      </section>
      <section id="faq">
        <h1 className="text-primary">Faq</h1>
      </section>
      </main>


  );
}
