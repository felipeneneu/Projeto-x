import Image from "next/image"
import Link from "next/link"
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/social-icons'

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1"{...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-200" />
    </Link>
  )
}

function About() {
  return (
    <section id="about" className="w-[20rem] md:w-full container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24 m-auto sm:py-6 sm:px-16">
      <div className=" grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg: grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image alt="minha foto" src='/avatar.png' width={800} height={800} quality={95} priority={true}
              className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
          </div>

        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className="text-heading text-3xl md:text-4xl lg:text-5xl text-secondary-foreground font-bold">@felipeneneu</h1>
          <p className="mt-6 text-base text-muted-foreground">CTO durante o dia, entusiasta de conteúdo digital à noite! Com mais de 16 anos de experiência no mundo da tecnologia, já desempenhei vários papéis como engenheiro de software, gerente de projetos e inovador estratégico. Sou totalmente a favor de fomentar a colaboração e inspirar equipes a criar soluções revolucionárias para o sucesso dos negócios. Fora do escritório, você pode me encontrar criando apaixonadamente conteúdo digital para inspirar, educar e entreter. Sempre atento para aprender e me manter à frente das tendências do mercado. Estou constantemente desafiando os limites da tecnologia e da criatividade. Vivo e respiro tecnologia 24/7...</p>
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <SocialLink href="/" icon={InstagramIcon} />
            <SocialLink href="/" icon={TwitterIcon} />
            <SocialLink href="/" icon={GitHubIcon} />
            <SocialLink href="/" icon={LinkedInIcon} />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About