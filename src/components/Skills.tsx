import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2"

import { 
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiAmazonaws,
  SiNginx,
  SiPython,

} from "react-icons/si";



export default function Skills() {
  const educations = [
    {
      name: "Engenharia da Computação | UFMA | Em andamento",
    },
    {
      name: "Bacharelado Interdisciplinar em Ciência e Tecnologia - BICT | UFMA | Concluído",
    },
   
  ]

  const skills = [
  
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
      name: "Node.js",
      icon: <SiNodedotjs className="h-12 w-12"/>,

      level: 65,
    },
    {
      name: "PHP",
      icon: <SiPhp className="h-12 w-12"/>,
      level: 70,
    },
    {
      name: "Laravel",
      icon: <SiLaravel className="h-12 w-12"/>,
      level: 70,
    },
     {
      name: "Python",
      icon: <SiPython className="h-12 w-12"/>,
      level: 65,
    },
    {
      name: "Mysql",
      icon: <SiMysql className="h-12 w-12"/>,

      level: 65,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="h-12 w-12"/>,
      level: 65,
    },
    {
      name: "Docker",
      icon: <SiDocker className="h-12 w-12"/>,
      level: 60,
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
   
  ]

  return (
    <section className="bg-brand-950 text-brand-100">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-white">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-brand-400">
              Skills
            </span>
          </h2>
          <p className="text-sm text-brand-100/70">FullStack Developer</p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-white">
              <HiAcademicCap className="h-8 w-8 text-brand-400" />
              Educação
            </h3>

            {educations.map((education, index) => (
              <div
                key={`education-${index}`}
                className="mb-2 rounded-lg border border-brand-400/20 bg-brand-800/20 p-4 text-sm font-semibold text-brand-100"
              >
                {education.name}
              </div>
            ))}
          </div>
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-white">
              <HiCodeBracketSquare className="h-8 w-8 text-brand-400" />
              Skills
            </h3>

            <div className="grid grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  title={skill.name}
                  className="flex aspect-square items-center justify-center rounded-lg border-b-2 border-brand-400 bg-brand-800/20 p-2 text-brand-400 shadow-sm transition hover:bg-brand-800/40"
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
