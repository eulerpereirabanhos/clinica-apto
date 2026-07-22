"use client";

import Link from "next/link";
import { Plus, Stethoscope } from "lucide-react";

export type SpecialtyFormData = {
  name: string;
  slug: string;
  description: string;
  defaultDuration: string;
};

export default function SpecialtiesPageContent() {
  return (
    <section className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <Stethoscope size={24} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                  Administração
                </p>

                <h1 className="text-3xl font-bold text-slate-900">
                  Especialidades
                </h1>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-slate-600">
              Gerencie as especialidades e os tratamentos oferecidos pela
              Clínica APTO.
            </p>
          </div>

          <Link
            href="/dashboard/especialidades/nova"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
          >
            <Plus size={20} />
            Nova especialidade
          </Link>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Fisioterapia
          </h2>

          <p className="mt-3 text-slate-600">
            Especialidade cadastrada para atendimentos de prevenção,
            recuperação e reabilitação.
          </p>

          <span className="mt-5 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Ativa
          </span>
        </div>
      </div>
    </section>
  );
}