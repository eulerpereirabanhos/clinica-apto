export default function CTAFinal() {
  return (
    <section className="bg-cyan-700 px-6 py-20 text-center text-white">
      <div className="mx-auto max-w-5xl">
        <p className="font-semibold uppercase tracking-[4px] text-cyan-100">
          Cuide da sua saúde
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          Agende seu atendimento na Clínica APTO
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-cyan-50">
          Nossa equipe está preparada para oferecer um atendimento humanizado,
          personalizado e adequado às suas necessidades.
        </p>

        <a
          href="https://wa.me/5537999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:bg-cyan-50"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}