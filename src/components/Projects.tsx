import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export default function Projects() {
  const projects = [
    {
      title: "Câmara de Manoel Emídio-PI",
      description: "portal da transparência",
      image:"https://raw.githubusercontent.com/higorcos/higorcos/main/public/images/MockupManoel.png",
      //image: "/images/MockupManoel.png",
      link: "https://manoelemidio.pi.leg.br/",
      colSpan: "col-span-2 md:col-span-3",
    },
    {
      title: "Prefeitura de Raposa-MA",
      description: "portal da transparência",
      image:"https://raw.githubusercontent.com/higorcos/higorcos/main/public/images/MockupRaposa.png",
      // image: "/images/MockupRaposa.png",
      link: "http://raposa.ma.gov.br/",
      colSpan: "col-span-3 md:col-span-3",
    },
    // {
    //   title: "Projeto 3",
    //   description: "Descrição do projeto 3",
    //   image:
    //     "https://media.istockphoto.com/id/1305995602/photo/responsive-floating-responsive-design.jpg?b=1&s=170667a&w=0&k=20&c=uFqBz27v_B0UxcslnvZxd9c0D9eJAef7veRZf6b-v-A=",
    //   link: "#",
    //   colSpan: "col-span-1",
    // },
    {
      title: "API dos portais (node.js)",
      description: "Controla as informações dos portais - Projeto Privado",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "#",
      colSpan: "col-span-3 md:col-span-3",
    },
    // {
    //   title: "Projeto 5",
    //   description: "Descrição do projeto 5",
    //   image:
    //     "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    //   link: "#",
    //   colSpan: "col-span-1",
    // },
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
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador fullStack.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <a 
                href={project.link} target="_blank"
                className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">

                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}
