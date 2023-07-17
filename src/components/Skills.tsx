import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2"

import { SiJavascript,
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiMysql,
  SiAmazonaws,
  SiNginx,
  SiPython,

} from "react-icons/si";



export default function Skills() {
  const educations = [
    {
      name: "Interdisciplinar em ciências e suas tecnologias - BICT | UFMA |Em andamento",
    },
    {
      name: "Curso de Desenvolvimento Node.js | Guia do Programador",
    },
    {
      name: "Curso de Javascript | Curso em vídeo",
    },
    {
      name: "Curso de React | Matheus Fraga",
    },
  ]

  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 className="h-12 w-12"/>,

      level: 95,
    },
    {
      name: "CSS",
      icon: <SiCss3 className="h-12 w-12"/>,

      level: 95,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="h-12 w-12"/>,
      level: 90,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-12 w-12"/>,

      level: 90,
    },
    {
      name: "React.js",
      icon: <SiReact className="h-12 w-12"/>,

      level: 85,
    },
    {
      name: "Vue.js",
      icon: <SiVuedotjs className="h-12 w-12"/>,
      level: 85,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="h-12 w-12"/>,

      level: 65,
    },
    {
      name: "Mysql",
      icon: <SiMysql className="h-12 w-12"/>,

      level: 65,
    },
    // {
    //   name: "Firebird",
    //   icon: <AiFillGithub className="h-12 w-12"/>,

    //   level: 65,
    // },
    {
      name: "EC2 - AWS",
      icon: <SiAmazonaws className="h-12 w-12"/>,
      level: 65,
    },
    {
      name: "Nginx",
      icon: <SiNginx className="h-12 w-12"/>,
      level: 65,
    },
    {
      name: "Python",
      icon: <SiPython className="h-12 w-12"/>,
      level: 65,
    },
  ]

  return (
    <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-gray-800">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>
          <p className="relative text-sm text-gray-700">
            FullStack Developer 
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 text-blue-600" />
              Educação
            </h3>

            {educations.map((education, index) => (
              <div
                key={`education-${index}`}
                className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900"
              >
                {education.name}
              </div>
            ))}
          </div>
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiCodeBracketSquare className="h-8 w-8 text-blue-600" />
              Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2"
                  title={skill.name}
                  >
                    {/* <img
                      alt={skill.name}
                      className="h-10 w-10 rounded"
                      /> */}
                      {skill.icon}
                  </div>
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
