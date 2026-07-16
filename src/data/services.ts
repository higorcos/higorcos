import {
  Globe,
  Building2,
  LayoutTemplate,
  Landmark,
  Webhook,
  Lightbulb,
  Cloud,
  LucideIcon,
} from "lucide-react"

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: "Desenvolvimento Web",
    description: "Sites e sistemas web estáticos e dinâmicos, do zero ao ar.",
    icon: Globe,
  },
  {
    title: "Sistemas Corporativos",
    description: "Plataformas sob medida para operações internas e processos de negócio.",
    icon: Building2,
  },
  {
    title: "Landing Pages",
    description: "Páginas de alta conversão com design e performance como prioridade.",
    icon: LayoutTemplate,
  },
  {
    title: "Portais Governamentais",
    description: "Portais da transparência e sistemas para órgãos públicos, dentro da LAI.",
    icon: Landmark,
  },
  {
    title: "APIs REST",
    description: "APIs escaláveis, com autenticação, cache e infraestrutura de produção.",
    icon: Webhook,
  },
  {
    title: "Consultoria",
    description: "Diagnóstico técnico e arquitetura para times que já têm um produto.",
    icon: Lightbulb,
  },
  {
    title: "Cloud & Infraestrutura",
    description: "Deploy, load balancing e monitoramento em AWS.",
    icon: Cloud,
  },
]
