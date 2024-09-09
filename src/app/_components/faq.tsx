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


      <div className="mx-auto text-center md:max-w-[58rem] relative">

        <Accordion type="single" collapsible className="w-[80%] m-auto md:w-full md:m-0">

          <AccordionItem value="item-1">
            <AccordionTrigger>Pesquisa e Planejamento de UI/UX:
            </AccordionTrigger>
            <AccordionContent className="text-left">

              <li>Pesquisa de mercado e análise de concorrência.</li>
              <li>Criação de wireframes e protótipos.</li>
              <li>Design centrado no usuário, com foco na experiência de navegação (UX).</li>




            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Design de Interface (UI):
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <li>Desenvolvimento de uma interface visual personalizada e responsiva.</li>
              <li>Criação de layouts atraentes e otimizados para dispositivos móveis e desktops.</li>
              <li>Prototipagem interativa para aprovação do cliente.</li>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Desenvolvimento com Next.js:
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <li> Criação de páginas utilizando renderização estática (SSG) e/ou renderização do lado do servidor (SSR) para otimização de SEO.</li>
              <li>Integração com APIs para exibição de dados dinâmicos.</li>
              <li>Uso das melhores práticas de performance e otimização de carregamento.</li>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Otimização de SEO e Performance:
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <li>Implementação de práticas avançadas de SEO para melhor ranqueamento em motores de busca.</li>
              <li>Otimização de tempo de carregamento e performance em todas as páginas.</li>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Responsividade Total:
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <li>Garantia de que o site funcione perfeitamente em todos os dispositivos (mobile, tablet, desktop).</li>
              <li>Testes em navegadores e plataformas para compatibilidade.</li>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Suporte e Manutenção Inicial:
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <li>Suporte técnico durante a fase de implementação e 30 dias após a entrega.</li>
              <li>Treinamento básico para gerenciamento de conteúdo (se aplicável).</li>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>

    </section>
  )
}

export default FaqSection