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
    <section className="bg-gray-100">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-gray-800">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>
          <p className="text-sm text-gray-700">FullStack Developer</p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row">
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

            <div className="grid grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  title={skill.name}
                  className="flex aspect-square items-center justify-center rounded-lg bg-white p-2 shadow-sm"
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
