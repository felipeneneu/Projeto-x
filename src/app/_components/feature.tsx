import { Info } from "@/components/informativo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function FeatureSection() {
  return (
    <section id="features" className="md:w-full mt-8  m-auto bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-8 text-center">
        <h2 className="text-heading  leading-[1.1] sm:text-3xl md:text-6xl text-secondary-foreground font-bold">
          Tech Stack
        </h2>
        <p className="m-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Venha desenvolver comigo um projeto real, do zero, usando a melhor Stack do mercado.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <Info />
        <Info />
        <Info />
        <Info />
      </div>


    </section>
  )
}

export default FeatureSection;