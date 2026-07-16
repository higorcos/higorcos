export type EducationItem = {
  title: string
  institution: string
  period: string
  status: "Em andamento" | "Concluído"
}

export const educationTimeline: EducationItem[] = [
  {
    title: "Bacharelado Interdisciplinar em Ciência e Tecnologia (BICT)",
    institution: "UFMA",
    period: "Concluído",
    status: "Concluído",
  },
  {
    title: "Engenharia da Computação",
    institution: "UFMA",
    period: "Em andamento",
    status: "Em andamento",
  },
]

export const courses = [
  "Curso de Desenvolvimento Node.js | Guia do Programador",
  "Curso de Javascript | Curso em vídeo",
  "Curso de React | Matheus Fraga",
]
