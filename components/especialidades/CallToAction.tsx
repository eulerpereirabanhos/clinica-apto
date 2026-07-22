import { ArrowRight, Calendar, Phone, MessageCircle } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cyan-700 via-cyan-600 to-blue-700 py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-6 text-center text-white">

        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
          Clínica APTO
        </span>

        <h2 className="mt-8 text-4xl font-bold md:text-5xl">
          Sua saúde merece atenção especializada.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-cyan-50">
          Agende sua avaliação e conte com uma equipe preparada para oferecer
          atendimento humanizado, tecnologia e resultados.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <a
            href="https://wa.me/5537999893736"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-cyan-700 transition hover:scale-105"
          >
            <MessageCircle size={22} />
            WhatsApp
          </a>

          <a
            href="tel:+5537999893736"
            className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white px-8 py-4 font-bold transition hover:bg-white hover:text-cyan-700"
          >
            <Phone size={22} />
            Ligar Agora
          </a>

          <a
            href="#agendamento"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-900 px-8 py-4 font-bold transition hover:bg-cyan-950"
          >
            <Calendar size={22} />
            Agendar Avaliação
            <ArrowRight size={20} />
          </a>

        </div>

      </div>
    </section>
  );
}