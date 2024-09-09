import type { Metadata } from "next";
import { Inter as FontSans } from 'next/font/google';
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',

})

const fontHeading = localFont({
  src: './fonts/CalSans-SemiBold.woff2',
  variable: '--fontheading',
})

export const metadata: Metadata = {
  title: "Voe Alto Web",
  description: "Desenvolvemos sites profissionais, responsivos e otimizados para SEO com Next.js, React e Tailwind CSS. Foco em performance, design moderno e experiência do usuário (UI/UX). Transforme sua presença online com soluções web de alta qualidade.",
  keywords: ['Next.js',
    'Next.js 14',
    'React.js',
    'Felipe Neneu',
    'Voe Alto Design',
    'Javascript',
    'Typescript',
    'Tailwind',
    'Desenvolvimento de sites,',
    'Criação de sites',
    'sites com Next.js',
    'Desenvolvimento front-end,'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
          <Analytics />
        </ThemeProvider>

      </body>
    </html>
  );
}
