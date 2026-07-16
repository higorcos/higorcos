export type FeaturedProject = {
  slug: string
  title: string
  tagline: string
  problem: string
  solution: string
  tech: string[]
  result: string
  image: string
  link: string
  /** Se true, ganha bloco extra de serviços + CTA (uso: Kerodon) */
  isCompany?: boolean
  companyServices?: string[]
}

export type SimpleProject = {
  title: string
  description: string
  image: string
  link: string
  private: boolean
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "maranhao-livre-da-fome",
    title: "Maranhão Livre da Fome",
    tagline: "Sistema estadual de combate à insegurança alimentar",
    problem:
      "A Secretaria de Estado da Saúde não tinha como rastrear, de forma nominal e territorializada, o cumprimento das condicionalidades de saúde das famílias participantes do programa — cada consulta e ficha nutricional ficava dispersa entre municípios.",
    solution:
      "Desenvolvi um sistema web que centraliza o cadastro de famílias, consultas e fichas nutricionais ao longo do tempo, com controle de acesso por papel (gestor municipal, estadual, profissional de saúde) e autenticação em duas etapas.",
    tech: ["PHP", "Laravel", "MySQL", "2FA"],
    result:
      "Em uso pela Secretaria de Estado da Saúde do Maranhão para acompanhar o programa em escala estadual.",
    image: "/images/MockupMaranhaoLivreDaFome.png",
    link: "https://maranhaolivredafome.saude.ma.gov.br/",
  },
  {
    slug: "kerodon",
    title: "Kerodon",
    tagline: "Minha software house",
    problem:
      "Pequenas e médias empresas precisam de sites, sistemas e automações profissionais, mas raramente têm estrutura técnica própria para tirar isso do papel.",
    solution:
      "Fundei a Kerodon para atender esse mercado de ponta a ponta: da concepção do produto até a infraestrutura em nuvem que o mantém no ar.",
    tech: ["React", "Node.js", "Laravel", "AWS"],
    result:
      "Já entreguei sites e sistemas para clientes próprios e projetos de terceiros, incluindo a landing page da Isabella da Hora.",
    image: "/images/MockupKerodon.png",
    link: "https://kerodon.dev.br/",
    isCompany: true,
    companyServices: [
      "Sites institucionais",
      "Landing pages",
      "Sistemas web sob medida",
      "APIs e integrações",
      "Automação de processos",
      "Infraestrutura e Cloud",
    ],
  },
  {
    slug: "prefeitura-de-raposa",
    title: "Prefeitura de Raposa-MA",
    tagline: "Portal da transparência municipal",
    problem:
      "Prefeituras são obrigadas por lei a publicar dados de transparência pública, mas grande parte recorre a soluções genéricas, caras ou desatualizadas.",
    solution:
      "Construí uma plataforma de portal da transparência do zero, desenhada para ser replicada: hoje atende essa prefeitura e a Câmara de Manoel Emídio-PI, sustentadas pela mesma API central.",
    tech: ["React", "Node.js", "AWS"],
    result:
      "Plataforma própria replicada para múltiplas prefeituras e câmaras municipais.",
    image: "/images/MockupRaposa.png",
    link: "http://raposa.ma.gov.br/",
  },
  {
    slug: "xfera-tech",
    title: "Xfera Tech",
    tagline: "Plataforma SaaS de EaD corporativo",
    problem:
      "Empresas que investem em capacitação corporativa precisam de um ambiente de aprendizagem robusto, mas montar isso do zero é caro e demorado.",
    solution:
      "Ajudei a construir uma Plataforma EaD (AVA) sobre o Moodle, com aplicativo mobile exclusivo, além de sistemas sob medida para outras frentes da operação.",
    tech: ["Moodle", "PHP", "Mobile"],
    result: "Plataforma em operação, unindo produto SaaS com desenvolvimento sob medida.",
    image: "/images/xfera.png",
    link: "https://xferatech.com",
  },
]

export const otherProjects: SimpleProject[] = [
  {
    title: "Câmara de Manoel Emídio-PI",
    description: "Portal da transparência",
    image: "/images/MockupManoel.png",
    link: "https://manoelemidio.pi.leg.br/",
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
    title: "API dos portais (Node.js)",
    description:
      "API REST com load balancing e infraestrutura na AWS que sustenta os portais de transparência replicados em várias prefeituras e câmaras",
    image: "",
    link: "",
    private: true,
  },
  {
    title: "RELAB",
    description:
      "Sistema de mapeamento da rede laboratorial do Maranhão — rastreia e credencia unidades pela capacidade de exames que realizam",
    image: "",
    link: "",
    private: true,
  },
]

export const isabellaCase = {
  title: "Isabella da Hora",
  tagline: "Case de design — Landing page premium",
  description:
    "Nem todo projeto é sobre sistemas complexos. Esse case mostra outro lado do trabalho: concepção visual, hierarquia de conteúdo e microinterações para uma landing page pessoal de jornalismo e social media.",
  highlights: ["Design & UX", "Responsividade", "Motion & micro-interações"],
  image: "/images/MockupIsabella.png",
  link: "https://isabelladahora.kerodon.dev.br/",
}
