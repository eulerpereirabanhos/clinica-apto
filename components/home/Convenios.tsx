export default function Convenios() {
  const convenios = [
    "Unimed",
    "Cassi",
    "Bradesco Saúde",
    "Particular",
    "Outros Convênios"
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="text-cyan-600 font-semibold uppercase tracking-widest">
            Convênios
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Trabalhamos com diversos convênios
          </h2>

          <p className="mt-4 text-slate-600">
            Consulte nossa equipe para confirmar cobertura.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {convenios.map((item)=>(
            <div
              key={item}
              className="rounded-2xl bg-white p-8 shadow text-center font-semibold hover:shadow-lg transition"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}