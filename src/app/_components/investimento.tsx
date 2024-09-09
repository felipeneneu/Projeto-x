import { Check } from "lucide-react"
import Enrollment from "./matricula"
import PreEnrollment from "./modal"

function Investimento() {
  return (
    <section id="investment" className="w-[22rem] md:w-[64rem] mt-8  m-auto container space-y-6 py-8 md:py-12 lg:py-24 relative">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-8 text-center">
        <h2 className="text-heading  leading-[1.1] sm:text-3xl md:text-6xl text-secondary-foreground font-bold">
          Investimento
        </h2>
        <p className="md:w-[85%] max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          O desenvolvimento de um site com Next.js tende a ter um custo mais elevado do que um site com HTML/CSS ou até mesmo React, já que o Next.js oferece funcionalidades avançadas como renderização do lado do servidor (SSR), geração de páginas estáticas (SSG) e otimização de performance, o que torna a solução mais robusta e ideal para projetos que exigem SEO avançado e alta performance.
        </p>
      </div>

      <div className="grid w-full m-auto md:w-[85%] border rounded-lg items-start gap-10 p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">O que está incluído
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" />Pesquisa e Planejamento de UI/UX 
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" />Design de Interface (UI)
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" />Desenvolvimento com Next.js
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" />Otimização de SEO e Performance
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" />Responsividade Total
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4" />Suporte e Manutenção Inicial
            </li>
          </ul>

        </div>
        <div className="flex flex-col gap-4 text-center">
          <div className="space-y-2">
            <h4 className="font-bold">
              12x <br />
              R$ <span className="text-6xl font-bold text-primary">97,80</span>
            </h4>
            <h4 className="font-bold text-xl flex text-center justify-center">ou R$978,00 à vista</h4>
            <div className="flex flex-col gap-2">
              <div>
                <Enrollment />
              </div>
              <div>
                <PreEnrollment />
              </div>

              <svg viewBox="0 0 1024 1024" className="hidden md:block absolute left-1/4 top-full md:left-1/2 md:top-[40%] -z-10 h-[16rem] w-[16rem] 
    md:h-[54rem] md:w-[54rem]
     -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#00ffbf" />
                    <stop offset="1" stopColor="#3db66b11" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Investimento