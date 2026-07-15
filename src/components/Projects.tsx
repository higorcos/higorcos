import { HiArrowTopRightOnSquare, HiLockClosed } from "react-icons/hi2"

export default function Projects() {
  const projects = [
    {
      title: "Câmara de Manoel Emídio-PI",
      description: "Portal da transparência",
      image:"https://raw.githubusercontent.com/higorcos/higorcos/main/public/images/MockupManoel.png",
      //image: "/images/MockupManoel.png",
      link: "https://manoelemidio.pi.leg.br/",
      colSpan: "col-span-3 md:col-span-3",
      private: false,
    },
    {
      title: "Prefeitura de Raposa-MA",
      description: "Portal da transparência",
      image:"https://raw.githubusercontent.com/higorcos/higorcos/main/public/images/MockupRaposa.png",
      // image: "/images/MockupRaposa.png",
      link: "http://raposa.ma.gov.br/",
      colSpan: "col-span-3 md:col-span-3",
      private: false,
    },
    {
      title: "Maranhão Livre da Fome",
      description:
        "Sistema de acompanhamento do programa estadual de combate à insegurança alimentar - controla consultas e fichas nutricionais das famílias participantes",
      image: "/images/MockupMaranhaoLivreDaFome.png",
      link: "https://maranhaolivredafome.saude.ma.gov.br/",
      colSpan: "col-span-3 md:col-span-1",
      private: false,
    },
    {
      title: "Isabella da Hora",
      description: "Landing page pessoal, minimalista",
      image: "/images/MockupIsabella.png",
      link: "https://isabelladahora.kerodon.dev.br/",
      colSpan: "col-span-3 md:col-span-1",
      private: false,
    },
    {
      title: "Corrida de Tora dos Krikati",
      description:
        "Site documental sobre a tradição da Corrida de Tora dos povos indígenas Krikati no Maranhão",
      image: "/images/MockupCorridaTora.png",
      link: "https://higorcos.github.io/corrida-de-tora-krikati/",
      colSpan: "col-span-3 md:col-span-1",
      private: false,
    },
    {
      title: "RELAB",
      description:
        "Sistema de mapeamento da rede laboratorial do Maranhão - rastreia e credencia unidades pela capacidade de exames que realizam - Projeto Interno",
      image: "",
      link: "",
      colSpan: "col-span-3 md:col-span-1",
      private: true,
    },
    {
      title: "API dos portais (Node.js)",
      description:
        "API REST com load balancing e infraestrutura na AWS que sustenta os portais de transparência replicados em várias prefeituras e câmaras - Projeto Interno",
      image: "",
      link: "",
      colSpan: "col-span-3 md:col-span-1",
      private: true,
    },
  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e profissionais que já realizei ao
              longo da minha trajetória como programador fullStack. Os portais
              de transparência abaixo fazem parte de uma plataforma própria,
              desenvolvida do zero e replicada para várias prefeituras e
              câmaras municipais.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) =>
              project.private ? (
                <div
                  key={index}
                  className={`relative flex h-52 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-blue-800 to-gray-900 p-4 text-center ${project.colSpan}`}
                >
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/30 px-2 py-1 text-[10px] uppercase tracking-wide text-gray-300">
                    <HiLockClosed className="h-3 w-3" />
                    Privado
                  </span>
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-300">
                    {project.description}
                  </p>
                </div>
              ) : (
                <div
                  key={index}
                  className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                  style={{ backgroundImage: `url('${project.image}')` }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600/90 p-4 text-center text-white opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <h4 className="font-headline text-lg font-semibold">
                      {project.title}
                    </h4>
                    <p className="mb-4 text-sm">{project.description}</p>
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}
