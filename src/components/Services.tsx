import { HiCommandLine, HiComputerDesktop } from "react-icons/hi2"

export default function Services() {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos.",
      icon: <HiComputerDesktop className="h-10 w-10" />,
    },
    {
      title: "Sistemas",
      description: "Desenvolvimento de sistemas e APIs REST.",
      icon: <HiCommandLine className="h-10 w-10" />,
    },
  ]

  return (
    <section className="bg-brand-950 text-brand-100">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-white">
              Meus
            </span>
            <span className="font-handwriting text-4xl text-brand-400">
              Serviços
            </span>
          </h2>
          <p className="text-sm text-brand-100/70">
            Posso atender uma gama completa de serviços, do front-end ao
            back-end com banco de dados e sistemas.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          {services.map((service, index) => (
            <div
              className="basis-1/2 rounded-lg border-b-2 border-brand-400 bg-brand-800/20 p-6"
              key={`service-${index}`}
            >
              <div className="mb-2 text-brand-400">{service.icon}</div>
              <h3 className="text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-brand-100/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
