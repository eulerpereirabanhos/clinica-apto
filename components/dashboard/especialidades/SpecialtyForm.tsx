"use client";

import { FormEvent, useState } from "react";

export default function SpecialtyForm() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [defaultDuration, setDefaultDuration] = useState("60");

  function handleNameChange(value: string) {
    setName(value);

    const generatedSlug = value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    setSlug(generatedSlug);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      name,
      slug,
      description,
      defaultDuration,
    });

    alert("Especialidade preparada para cadastro.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-6">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-slate-800"
          >
            Nome da especialidade
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => handleNameChange(event.target.value)}
            placeholder="Exemplo: Fisioterapia Pediátrica"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        <div>
          <label
            htmlFor="slug"
            className="mb-2 block font-semibold text-slate-800"
          >
            Endereço da página
          </label>

          <input
            id="slug"
            type="text"
            value={slug}
            onChange={(event) => setSlug(event.target.value)}
            placeholder="fisioterapia-pediatrica"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block font-semibold text-slate-800"
          >
            Descrição
          </label>

          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Descreva a especialidade..."
            rows={5}
            required
            className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        <div>
          <label
            htmlFor="defaultDuration"
            className="mb-2 block font-semibold text-slate-800"
          >
            Duração padrão da consulta
          </label>

          <input
            id="defaultDuration"
            type="number"
            min="10"
            step="5"
            value={defaultDuration}
            onChange={(event) => setDefaultDuration(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
        >
          Salvar especialidade
        </button>
      </div>
    </form>
  );
}