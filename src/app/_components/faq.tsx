import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function FaqSection() {
  return (
    <section id="faq" className="md:w-full mt-8  m-auto bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-8 text-center">
        <h2 className="text-heading  leading-[1.1] sm:text-3xl md:text-6xl text-secondary-foreground font-bold">
          FAQ
        </h2>
      </div>


      <div className="mx-auto text-center md:max-w-[58rem]">
        <Accordion type="single" collapsible className="w-[80%] m-auto md:w-full md:m-0">

          <AccordionItem value="item-1">
            <AccordionTrigger>Como comprar o curso?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              Se estiver no período de matrículas abertas, basta clicar no botão Matricular que você será redirecionado para uma página de compras da Hotmart. Feito isso, você poderá realizar as aulas através da própria plataforma da Hotmart. Você receberar informações de quando as aulas estarão disponíveis.
              Caso o período de matrículas esteja encerrado, você poderá clicar no botão Lista de Espera e preencher o formulário para ser avisado quando as matrículas forem reabertas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Para quem é este curso?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              Para quem possui conhecimentos básicos de HTML, CSS e JavaScript <br />
              Para quem quer aprender desenvolver uma aplicação do zero <br />
              Para quem quer estar atualizado com os conhecimentos que as grandes empresas procuram
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Por quanto tempo terei acesso ao curso?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              Você terá 1 ano após a data da compra.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Lorem ipsum dolor?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt itaque porro ea vero adipisci ipsa. Voluptatibus neque laborum maxime sit odio provident amet pariatur facilis fugit, corporis id dignissimos soluta!
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>

    </section>
  )
}

export default FaqSection