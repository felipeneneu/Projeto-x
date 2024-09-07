import About from "./_components/about";
import FaqSection from "./_components/faq";
import FeatureSection from "./_components/feature";
import { IntroSection } from "./_components/intro-section";
import Investimento from "./_components/investimento";


export default function Home() {
  return (

    <main className="">
      <IntroSection />
      <About />
      <FeatureSection />
      <Investimento />
      <FaqSection />



      </main>


  );
}
