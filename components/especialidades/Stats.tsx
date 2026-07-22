import { Users, Award, Star, Activity } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "+5.000",
    label: "Pacientes atendidos",
  },
  {
    icon: Award,
    value: "15+",
    label: "Anos de experiência",
  },
  {
    icon: Star,
    value: "98%",
    label: "Satisfação dos pacientes",
  },
  {
    icon: Activity,
    value: "8",
    label: "Áreas de atuação",
  },
];

export default function Stats() {
  return (
    <section className="bg-cyan-600 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon
                  className="mx-auto mb-4 text-cyan-600"
                  size={40}
                />

                <h3 className="text-4xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}