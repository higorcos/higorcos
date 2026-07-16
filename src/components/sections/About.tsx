import Container from "../ui/Container"
import Reveal from "../ui/Reveal"
import SectionHeading from "../ui/SectionHeading"
import { stats } from "../../data/stats"

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading kicker="Sobre" title="Quem" accent="constrói" />

        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="leading-relaxed text-brand-100/70">
            Sou desenvolvedor FullStack, formado em Ciência e Tecnologia pela
            UFMA e atualmente cursando Engenharia da Computação na mesma
            instituição. Construo sistemas web e APIs para o setor público e
            para empresas — sempre com foco em performance, qualidade de
            código e uma experiência que o usuário final realmente sente.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="rounded-xl border border-brand-400/15 bg-brand-800/20 p-6 text-center">
                <p className="font-headline text-3xl font-bold text-brand-200">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-brand-100/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
