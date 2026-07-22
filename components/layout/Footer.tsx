import Link from "next/link"
import {
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre a clínica", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Nossa equipe", href: "#equipe" },
  { label: "Agendamento", href: "#agendamento" },
  { label: "Contato", href: "#contato" },
];

const specialties = [
  "Fisioterapia ortopédica",
  "Fisioterapia esportiva",
  "Fisioterapia pediátrica",
  "Fisioterapia geriátrica",
  "Pilates clínico",
  "Quiropraxia clínica",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappNumber = "5537999441222";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de obter mais informações sobre os atendimentos da Clínica APTO."
  );

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 font-bold text-white">
              AP
            </div>

            <div>
              <p className="text-xl font-extrabold text-white">Clínica APTO</p>
              <p className="text-xs text-slate-400">
                Fisioterapia e reabilitação
              </p>
            </div>
          </Link>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Cuidado, experiência e atendimento humanizado para promover
            movimento, recuperação e qualidade de vida.
          </p>
<div className="mt-6 flex items-center gap-3">
  <a
    href="#"
    aria-label="Site ou rede social da Clínica APTO"
    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition hover:bg-cyan-600 hover:text-white"
  >
    <Globe2 className="h-5 w-5" />
  </a>

  <a
    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp da Clínica APTO"
    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition hover:bg-emerald-600 hover:text-white"
  >
    <MessageCircle className="h-5 w-5" />
  </a>
</div>
        </div>

        <div>
          <h2 className="text-base font-bold text-white">Links rápidos</h2>

          <nav className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm transition hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-base font-bold text-white">Especialidades</h2>

          <ul className="mt-5 space-y-3">
            {specialties.map((specialty) => (
              <li key={specialty} className="text-sm text-slate-400">
                {specialty}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold text-white">Contato</h2>

          <div className="mt-5 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />

              <p className="leading-6 text-slate-400">
                Abaeté, Minas Gerais
              </p>
            </div>

            <a
              href="tel:+5537999441222"
              className="flex items-center gap-3 transition hover:text-cyan-300"
            >
              <Phone className="h-5 w-5 shrink-0 text-cyan-400" />
              (37) 99944-1222
            </a>

            <a
              href="mailto:contato@clinicaapto.com.br"
              className="flex items-center gap-3 transition hover:text-cyan-300"
            >
              <Mail className="h-5 w-5 shrink-0 text-cyan-400" />
              contato@clinicaapto.com.br
            </a>

            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />

              <p className="leading-6 text-slate-400">
                Segunda a sexta-feira
                <br />
                7h às 18h
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-center text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p>
            © {currentYear} Clínica APTO. Todos os direitos reservados.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="#" className="transition hover:text-slate-300">
              Política de Privacidade
            </Link>

            <Link href="#" className="transition hover:text-slate-300">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}