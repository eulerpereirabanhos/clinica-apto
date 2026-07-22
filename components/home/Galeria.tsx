const imagens = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800",
    alt: "Recepção da clínica",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=800",
    alt: "Atendimento fisioterapêutico",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800",
    alt: "Equipamentos modernos",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
    alt: "Sala de atendimento",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
    alt: "Equipe profissional",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
    alt: "Estrutura moderna",
  },
];

export default function Galeria() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">

          <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
            Galeria
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Conheça nossa estrutura
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Um ambiente moderno, acolhedor e preparado para oferecer o melhor atendimento aos nossos pacientes.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {imagens.map((imagem) => (
            <div
              key={imagem.id}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={imagem.src}
                alt={imagem.alt}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}