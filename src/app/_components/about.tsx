/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import Link from "next/link"
import {
  BeHanceIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/social-icons'



function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1"{...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-green-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-200" />
    </Link>
  )
}

function About() {
  return (
    <section id="about" className="w-[20rem] md:w-full container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24 m-auto sm:py-2 sm:px-16">
      <div className=" grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg: grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image alt="minha foto" src='/avatar.png' width={500} height={1200} quality={95} priority={true}
              className="h-full aspect-auto rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
          </div>

        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className="text-heading text-3xl md:text-4xl lg:text-5xl text-secondary-foreground font-black">Quem somos?</h1>
          <p className="mt-6 text-base text-muted-foreground">Na Voe Alto Web-Sites, nos dedicamos a construir soluções digitais de alta performance, utilizando as tecnologias mais avançadas do mercado, como Next.js, React e Tailwind CSS. Somos uma equipe apaixonada por inovação e por criar experiências online que impulsionam marcas e negócios.

            Nosso objetivo é oferecer sites personalizados, responsivos e otimizados, com foco em UI/UX, garantindo uma navegação fluida e intuitiva para seus clientes. Acreditamos que um site bem construído é a porta de entrada para o sucesso digital, por isso trabalhamos com uma abordagem estratégica, integrando design moderno e as melhores práticas de SEO para que sua empresa se destaque.

            Com anos de experiência no mercado, ajudamos empresas de todos os tamanhos a voar alto no mundo digital. Se você está buscando um site que combine inovação, performance e design, conte conosco!</p>
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <SocialLink href="https://www.instagram.com/felipeneneu/" target="_blank" icon={InstagramIcon} />
            <SocialLink href="https://www.behance.net/felipenight" icon={BeHanceIcon} target="_blank" />
            <SocialLink href="https://github.com/felipeneneu" icon={GitHubIcon} target="_blank" />
            <SocialLink href="/" icon={LinkedInIcon} target="_blank" />

          </div>
        </div>

      </div>
    </section>
  )
}

export default About