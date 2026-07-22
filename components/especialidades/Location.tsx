import {
  MapPin,
  Phone,
  Clock,
  Navigation,
} from "lucide-react";

export default function Location() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="container mx-auto px-6">

        <div className="text-center">

          <span className="font-semibold text-cyan-600">
            Localização
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Venha conhecer nossa clínica
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Estamos preparados para oferecer um atendimento confortável,
            moderno e acolhedor.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          <div className="rounded-3xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps?q=Abaeté+MG&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />

          </div>

          <div className="space-y-8">

            <div className="flex gap-4">

              <MapPin className="text-cyan-600" />

              <div>

                <h3 className="font-bold text-xl">
                  Endereço
                </h3>

                <p className="text-slate-600">
                  Rua Exemplo, 123
                  <br />
                  Centro
                  <br />
                  Abaeté - MG
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <Phone className="text-cyan-600" />

              <div>

                <h3 className="font-bold text-xl">
                  Telefone
                </h3>

                <p className="text-slate-600">
                  (37) 99999-9999
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <Clock className="text-cyan-600" />

              <div>

                <h3 className="font-bold text-xl">
                  Horário
                </h3>

                <p className="text-slate-600">
                  Segunda a Sexta
                  <br />
                  07:00 às 18:00
                </p>

              </div>

            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-xl bg-cyan-600 px-8 py-4 text-white font-bold hover:bg-cyan-700 transition"
            >
              <Navigation />

              Como chegar
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}