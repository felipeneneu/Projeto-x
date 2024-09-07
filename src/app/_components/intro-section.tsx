import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "@/components/ui/button";

export function IntroSection() {
  return (
    <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32 relative w-[20rem] m-auto md:w-full">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/4 top-full md:left-1/2 md:top-1/2 -z-10 h-[16rem] w-[16rem] 
    md:h-[54rem] md:w-[54rem]
     -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#3f3db6" />
            <stop offset="1" stopColor="#3f3db611" />
          </radialGradient>
        </defs>
      </svg>
      <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4 m-auto">
        <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center text-secondary-foreground">
          📅 Incscrições encerradas.

          <ModeToggle />
        </span>
        <h1 className="font-heading text-secondary-foreground text-4xl md:text-6xl lg:text-7xl font-bold ">The Next Dev <br />
          Full-stack <span className="text-primary">Next.js 14</span> </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">Invista na sua carreira e aprenda a desenvolver aplicações que as
          grandes empresas estão utilizando. Faça parte da próxima turma da formação mais completa de Next.js 14.</p>
        <div className="space-x-4 flex flex-col gap-3 md:block">
          <button className="bg-primary py-2 px-4 text-md text-white rounded shadow-lg font-bold transition duration-300 delay-150 hover:delay-300 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"><a href="#investment" >Quero fazer parte</a></button>
          <a href="#features" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>Saiba Mais</a>
        </div>
      </div>

    </section>
  )
}