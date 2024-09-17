import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image"


export function IntroSection() {
  return (
    <section id="intro" className="py-2 md:py-12 relative w-[20rem] m-auto md:w-full">
      <svg viewBox="0 0 1024 1024" className="absolute m-auto mt-[40rem] md:-top-[10%] -z-10 h-[20rem] w-[20rem] 
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
      <div className="flex flex-col w-[200px] md:my-5 md:h-full md:w-52 md:mx-auto m-auto py-7">
        <span className="rounded-2xl bg-muted px-4 py-1.5 text-xs font-medium flex flex-row items-center text-secondary-foreground mb-2 justify-center">
          Escolha seu tema.

          <ModeToggle />
        </span></div>

      <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4 m-auto">


        {/* <div className="md:grid md:grid-cols-[200px_minmax(300px,_1fr)] md:h-auto md:gap-x-20"> */}
        <div className="md:flex md:flex-cols md:h-auto w-[20rem] m-auto md:w-full md:gap-x-20">
          <Image alt="logo da empresa" src='/logo.svg' width={700} height={700} quality={95} priority={true}
            className="m-auto mb-3 md:m-auto md:mb-12 w-auto md:w-[54rem] flex" />


        </div>
        <div className="flex flex-col gap-8 justify-center items-center w-[20rem] m-auto md:w-full h-f">
            <h1 className=" font-heading text-secondary-foreground text-4xl md:text-6xl lg:text-7xl font-bold">

              Landing Pages<br />
              de Alto Impacto com <span className="text-primary">Next.js</span> </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">Maximize suas conversões e otimize suas campanhas com landing pages desenvolvidas em Next.js.</p>
          <div className="space-x-4 flex flex-col gap-3 md:block mb-12">
              <button className="bg-primary py-2 px-4 text-md text-white rounded shadow-lg font-bold transition duration-200 delay-100 hover:delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-green-800"><a href="#investment" >Comece Agora</a></button>
          <a href="#features" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>Saiba Mais</a>
        </div>
          </div>


      </div>

    </section>
  )
}