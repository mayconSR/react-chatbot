import "./globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "React Chatbot",
  description: "Um chatbot interativo construído com React, projetado para fornecer respostas rápidas e precisas aos usuários. Este projeto inclui exemplos de integração, personalização e funcionalidades básicas de conversação.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>{children}</body>
    </html>
  );
}
