import type { Metadata } from "next";
import { Inter as FontSans } from 'next/font/google';
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',

})

const fontHeading = localFont({
  src: './fonts/CalSans-SemiBold.woff2',
  variable: '--fontheading',
})

export const metadata: Metadata = {
  title: "The Next Dev",
  description: "Curso Next Js 14",
  keywords: ['Next.js',
    'Next.js 14',
    'React.js',
    'Felipe Neneu',
    'Voe Alto Design',
    'Javascript',
    'Typescript',
    'Tailwind'
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
        </ThemeProvider>

      </body>
    </html>
  );
}
