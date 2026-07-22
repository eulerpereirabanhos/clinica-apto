import {
  LayoutDashboard,
  RefreshCw,
} from "lucide-react";
import StatsCards from "@/components/dashboard/StatsCards";
import QuickActions from "@/components/dashboard/QuickActions";
import TodaySchedule from "@/components/dashboard/TodaySchedule";
import RecentPatients from "@/components/dashboard/RecentPatients";
import Notifications from "@/components/dashboard/Notifications";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
            <LayoutDashboard className="h-4 w-4" />
            Visão geral
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-600">
            Acompanhe as principais informações da Clínica APTO.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          <RefreshCw className="h-4 w-4" />
          Atualizar dados
        </button>
      </section>

      <StatsCards />

      <div className="grid gap-6 xl:grid-cols-[1.6fr_0.8fr]">
        <TodaySchedule />

        <QuickActions />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RecentPatients />

        <Notifications />
      </div>
    </div>
  );
}