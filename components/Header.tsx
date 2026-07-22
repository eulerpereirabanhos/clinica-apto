import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <div>
            <h1 className="text-2xl font-bold text-teal-700">Clínica APTO</h1>
            <p className="text-sm text-slate-500">Fisioterapia em Abaeté-MG</p>
          </div>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/especialidades/fisioterapia-abaete-mg">Especialidades</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contato">Contato</Link>
        </nav>

        <Link
          href="https://wa.me/5500000000000"
          className="rounded-full bg-teal-600 px-5 py-3 text-sm font-bold text-white"
        >
          Agendar
        </Link>
      </div>
    </header>
  );
}