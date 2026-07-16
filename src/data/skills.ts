import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiAmazonaws,
  SiNginx,
} from "react-icons/si"
import { IconType } from "react-icons"

export type SkillCategory = {
  name: string
  items: { name: string; icon: IconType }[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    name: "Banco de Dados",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "EC2 - AWS", icon: SiAmazonaws },
      { name: "Nginx", icon: SiNginx },
    ],
  },
]
