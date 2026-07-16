import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import Container from "../ui/Container"
import Reveal from "../ui/Reveal"
import SectionHeading from "../ui/SectionHeading"
import Badge from "../ui/Badge"
import { featuredProjects } from "../../data/projects"

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          kicker="Trabalho selecionado"
          title="Projetos em"
          accent="destaque"
          description="Sistemas reais, em produção, resolvendo problemas de empresas e do setor público."
        />

        <div className="flex flex-col gap-28">
          {featuredProjects.map((project, index) => {
            const reversed = index % 2 === 1

            return (
              <Reveal key={project.slug}>
                <div
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                    reversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block overflow-hidden rounded-2xl border border-brand-400/20 shadow-2xl shadow-black/30"
                  >
                    <div
                      className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-950/70 text-brand-100 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>

                  <div>
                    <span className="mb-2 block font-headline text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                      {project.tagline}
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-white md:text-3xl">
                      {project.title}
                    </h3>

                    <div className="mt-6 space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-100/50">
                          Problema
                        </p>
                        <p className="mt-1 text-sm text-brand-100/80">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-100/50">
                          Solução
                        </p>
                        <p className="mt-1 text-sm text-brand-100/80">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-100/50">
                          Resultado
                        </p>
                        <p className="mt-1 text-sm text-brand-100/80">
                          {project.result}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>

                    {project.isCompany && project.companyServices && (
                      <div className="mt-6 rounded-xl border border-brand-400/15 bg-brand-800/20 p-5">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-100/50">
                          O que a Kerodon faz
                        </p>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {project.companyServices.map((s) => (
                            <li
                              key={s}
                              className="flex items-center gap-2 text-sm text-brand-100/80"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-400" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-400 px-5 py-2.5 font-headline text-sm font-semibold text-brand-950 transition hover:bg-brand-200"
                    >
                      {project.isCompany ? "Conheça a Kerodon" : "Ver projeto"}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
