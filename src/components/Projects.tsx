import { HiArrowTopRightOnSquare, HiLockClosed } from "react-icons/hi2"

type Project = {
  title: string
  description: string
  image: string
  link: string
  private: boolean
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Câmara de Manoel Emídio-PI",
      description: "Portal da transparência",
      image:"https://raw.githubusercontent.com/higorcos/higorcos/main/public/images/MockupManoel.png",
      //image: "/images/MockupManoel.png",
      link: "https://manoelemidio.pi.leg.br/",
      private: false,
    },
    {
      title: "Prefeitura de Raposa-MA",
      description: "Portal da transparência",
      image:"https://raw.githubusercontent.com/higorcos/higorcos/main/public/images/MockupRaposa.png",
      // image: "/images/MockupRaposa.png",
      link: "http://raposa.ma.gov.br/",
      private: false,
    },
    {
      title: "Kerodon",
      description:
        "Minha empresa de desenvolvimento de sistemas web, automações e criação de sites sob medida",
      image: "/images/MockupKerodon.png",
      link: "https://kerodon.dev.br/",
      private: false,
    },
    {
      title: "Maranhão Livre da Fome",
      description:
        "Sistema de acompanhamento do programa estadual de combate à insegurança alimentar - controla consultas e fichas nutricionais das famílias participantes",
      image: "/images/MockupMaranhaoLivreDaFome.png",
      link: "https://maranhaolivredafome.saude.ma.gov.br/",
      private: false,
    },
    {
      title: "Isabella da Hora",
      description: "Landing page pessoal, minimalista",
      image: "/images/MockupIsabella.png",
      link: "https://isabelladahora.kerodon.dev.br/",
      private: false,
    },
    {
      title: "Corrida de Tora dos Krikati",
      description:
        "Site documental sobre a tradição da Corrida de Tora dos povos indígenas Krikati no Maranhão",
      image: "/images/MockupCorridaTora.png",
      link: "https://higorcos.github.io/corrida-de-tora-krikati/",
      private: false,
    },
    {
      title: "RELAB",
      description:
        "Sistema de mapeamento da rede laboratorial do Maranhão - rastreia e credencia unidades pela capacidade de exames que realizam - Projeto Interno",
      image: "",
      link: "",
      private: true,
    },
    {
      title: "API dos portais (Node.js)",
      description:
        "API REST com load balancing e infraestrutura na AWS que sustenta os portais de transparência replicados em várias prefeituras e câmaras - Projeto Interno",
      image: "",
      link: "",
      private: true,
    },
  ]

  return (
    <section className="border-b border-white/10 bg-gradient-to-tr from-black to-gray-900 text-white">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-white">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Projetos &
            </span>
            <span className="font-handwriting text-4xl">Portfólio</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400">
            Alguns dos projetos pessoais e profissionais que já realizei ao
            longo da minha trajetória como programador fullStack. Os portais
            de transparência abaixo fazem parte de uma plataforma própria,
            desenvolvida do zero e replicada para várias prefeituras e
            câmaras municipais.
          </p>
        </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => {
              const content = (
                <>
                  <div
                    className={`absolute inset-0 ${
                      project.private
                        ? "bg-gradient-to-br from-blue-800 to-gray-900"
                        : "bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    }`}
                    style={
                      !project.private
                        ? { backgroundImage: `url('${project.image}')` }
                        : undefined
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  {project.private && (
                    <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[10px] uppercase tracking-wide text-gray-200">
                      <HiLockClosed className="h-3 w-3" />
                      Privado
                    </span>
                  )}
                  {!project.private && (
                    <HiArrowTopRightOnSquare className="absolute right-3 top-3 z-10 h-5 w-5 text-white/70 transition-colors group-hover:text-white" />
                  )}

                  <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4">
                    <h4 className="font-headline text-lg font-semibold text-white">
                      {project.title}
                    </h4>
                    <p className="mt-1 text-xs leading-snug text-gray-200">
                      {project.description}
                    </p>
                  </div>
                </>
              )

              return project.private ? (
                <div
                  key={index}
                  className="group relative h-52 overflow-hidden rounded-lg shadow-lg"
                >
                  {content}
                </div>
              ) : (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block h-52 overflow-hidden rounded-lg shadow-lg"
                >
                  {content}
                </a>
              )
            })}
          </div>
      </div>
    </section>
  )
}
