"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardPlus,
  LayoutDashboard,
  LogOut,
  Settings,
  Stethoscope,
  UserRound,
  UsersRound,
  WalletCards,
  X,
} from "lucide-react";
import { BriefcaseMedical } from "lucide-react";

type SidebarProps = {
  onClose?: () => void;
};

const navigationItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Pacientes",
    href: "/dashboard/pacientes",
    icon: UsersRound,
  },
  {
    label: "Agenda",
    href: "/dashboard/agenda",
    icon: CalendarDays,
  },
  {
    label: "Atendimentos",
    href: "/dashboard/atendimentos",
    icon: ClipboardPlus,
  },
  {
    label: "Profissionais",
    href: "/dashboard/profissionais",
    icon: Stethoscope,
  },
  {
    label: "Financeiro",
    href: "/dashboard/financeiro",
    icon: WalletCards,
  },
  {
    label: "Relatórios",
    href: "/dashboard/relatorios",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Configurações",
    href: "/dashboard/configuracoes",
    icon: Settings,
  },
];
const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Pacientes",
    href: "/dashboard/pacientes",
    icon: UsersRound,
  },
  {
    label: "Agenda",
    href: "/dashboard/agenda",
    icon: CalendarDays,
  },
  {
    label: "Profissionais",
    href: "/dashboard/profissionais",
    icon: BriefcaseMedical,
  },
];
export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/dashboard") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  }

  return (
    <aside className="flex h-full w-72 flex-col border-r border-slate-200 bg-white">
      <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
        <Link
          href="/dashboard"
          onClick={onClose}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-700 text-white shadow-lg shadow-cyan-700/20">
            <UserRound className="h-6 w-6" />
          </div>

          <div>
            <p className="text-lg font-extrabold tracking-tight text-slate-950">
              Clínica APTO
            </p>

            <p className="text-xs font-medium text-slate-500">
              Painel administrativo
            </p>
          </div>
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar menu"
          className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav
        aria-label="Menu administrativo"
        className="flex-1 overflow-y-auto px-4 py-6"
      >
        <p className="mb-3 px-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          Administração
        </p>

        <div className="space-y-1.5">
          {navigationItems.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-cyan-700 text-white shadow-md shadow-cyan-700/20"
                    : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-800"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />

                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-slate-200 p-4">
        <div className="mb-4 rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-bold text-slate-900">Eric Rodrigues</p>

          <p className="mt-1 text-xs text-slate-500">Administrador</p>
        </div>

        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          Sair
        </Link>
      </div>
    </aside>
  );
}