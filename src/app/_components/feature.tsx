import { Components } from "@/components/components";
import { Info } from "@/components/informativo";
import { React } from "@/components/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function FeatureSection() {
  return (
    <section id="features" className="w-[22rem] md:w-full mt-8  m-auto bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-8 text-center">
        <h2 className="text-heading  leading-[1.1] sm:text-3xl md:text-6xl text-secondary-foreground font-bold">
          Nossa Stack
        </h2>
        <p className="m-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Usando a melhor Stack do mercado.
        </p>
      </div>

      {/* GRID ICONS STACKS */}

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"> 
        <Info />
        <React />
        <Components />


      </div>
      <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-4">
          Utilizando Next.js 14 e as melhores tecnologias do mercado. Veja o conteúdo abaixo...
        </p>
        <Accordion type="single" collapsible className="w-[80%] m-auto md:w-full md:m-0">
          <AccordionItem value="item-1">
            <AccordionTrigger>Next.js</AccordionTrigger>
            <AccordionContent className="text-left">
              <li>Next. js é um framework para quem usa React e quer dar um passo adiante. Ele é como um kit avançado para construir sites e aplicações web.</li>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger >React</AccordionTrigger>
            <AccordionContent className="text-left">
              <li>O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</li>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger >TailwindCSS.</AccordionTrigger>
            <AccordionContent className="text-left">
              <li>O Tailwind CSS, segundo o próprio site da web é um &quot;framework CSS visando a utilidade&quot;, que fornece várias dessas classes utilitárias, opinativas e de propósito único, que você pode usar diretamente dentro de sua marcação de texto para projetar um elemento.</li>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>

    </section>
  )
}

export default FeatureSection;