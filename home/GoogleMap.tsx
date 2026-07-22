export default function GoogleMap() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[4px] text-cyan-700">
            Nossa Localização
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Venha conhecer a Clínica APTO
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Rua Frei Orlando, 83 - Centro
            <br />
            Abaeté - MG
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <iframe
            title="Mapa da Clínica APTO"
            src="https://www.google.com/maps?q=Rua+Frei+Orlando,+83,+Abaeté,+MG&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}