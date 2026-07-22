import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Clínica APTO | Núcleo de Saúde em Abaeté-MG",
    template: "%s | Clínica APTO",
  },

  description:
    "Clínica multidisciplinar em Abaeté-MG com atendimentos em fisioterapia, RPG, quiropraxia, Pilates, nutrição, psicologia, dermatologia e terapias integrativas.",

  keywords: [
    "Clínica APTO",
    "clínica em Abaeté",
    "fisioterapia em Abaeté",
    "RPG em Abaeté",
    "quiropraxia em Abaeté",
    "Pilates em Abaeté",
    "nutricionista em Abaeté",
    "psicóloga em Abaeté",
    "dermatologista em Abaeté",
    "reabilitação",
    "saúde e bem-estar",
  ],

  authors: [
    {
      name: "Clínica APTO",
    },
  ],

  creator: "Clínica APTO",
  publisher: "Clínica APTO",

  applicationName: "Clínica APTO",

  category: "Saúde",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Clínica APTO",
    title: "Clínica APTO | Núcleo de Saúde em Abaeté-MG",
    description:
      "Atendimento multidisciplinar, humanizado e personalizado para promoção, prevenção e reabilitação da saúde física e mental.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Clínica APTO | Núcleo de Saúde em Abaeté-MG",
    description:
      "Atendimento multidisciplinar, humanizado e personalizado em Abaeté-MG.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
