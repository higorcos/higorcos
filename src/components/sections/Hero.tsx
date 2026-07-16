import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Container from "../ui/Container"

const codeLines = [
  { indent: 0, text: <><span className="text-brand-200">interface</span> <span className="text-white">Developer</span> {"{"}</> },
  { indent: 1, text: <><span className="text-brand-400">name</span>: <span className="text-brand-100">'Higor Costa'</span>;</> },
  { indent: 1, text: <><span className="text-brand-400">role</span>: <span className="text-brand-100">'FullStack Engineer'</span>;</> },
  { indent: 1, text: <><span className="text-brand-400">stack</span>: [<span className="text-brand-100">'React'</span>, <span className="text-brand-100">'Node'</span>, <span className="text-brand-100">'Laravel'</span>];</> },
  { indent: 1, text: <><span className="text-brand-400">focus</span>: <span className="text-brand-100">'governo & empresas'</span>;</> },
  { indent: 1, text: <><span className="text-brand-400">available</span>: <span className="text-brand-200">true</span>;</> },
  { indent: 0, text: <>{"}"}</> },
]

export default function Hero() {
  return (
    <section id="top" className="pt-32 md:pt-40">
      <Container className="grid items-center gap-16 pb-24 md:grid-cols-2 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-200">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-200 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-200" />
            </span>
            Disponível para novos projetos
          </span>

          <h1 className="font-headline text-4xl font-bold leading-tight text-white md:text-5xl">
            Construo sistemas web para{" "}
            <span className="text-brand-200">empresas, startups</span> e{" "}
            <span className="text-brand-200">governo</span>.
          </h1>

          <p className="mt-6 max-w-md text-brand-100/70">
            Sou Higor Costa, desenvolvedor FullStack em São Luís (MA).
            Transformo problemas reais em produtos digitais — de portais
            governamentais a plataformas SaaS.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-brand-400 px-5 py-3 font-headline text-sm font-semibold text-brand-950 transition hover:bg-brand-200"
            >
              Ver projetos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="rounded-md border border-brand-400/30 px-5 py-3 font-headline text-sm font-semibold text-brand-100 transition hover:border-brand-400"
            >
              Fale comigo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 scale-95 rounded-2xl bg-brand-400/20 blur-3xl" />

          <div className="rounded-2xl border border-brand-400/20 bg-brand-800/30 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center gap-1.5 border-b border-brand-400/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-100/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-100/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-100/30" />
              <span className="ml-2 font-mono text-[11px] text-brand-100/40">
                higor.ts
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              {codeLines.map((line, i) => (
                <div key={i} style={{ paddingLeft: line.indent * 16 }}>
                  {line.text}
                </div>
              ))}
            </pre>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 -top-6 flex items-center gap-2 rounded-xl border border-brand-400/20 bg-brand-950/80 px-4 py-2.5 text-sm shadow-lg backdrop-blur-md"
          >
            <CheckCircle2 className="h-4 w-4 text-brand-200" />
            <span className="text-white">9+ projetos entregues</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-6 -right-4 rounded-xl border border-brand-400/20 bg-brand-950/80 px-4 py-2.5 text-sm shadow-lg backdrop-blur-md"
          >
            <span className="text-brand-200">3+ </span>
            <span className="text-white">órgãos públicos</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
