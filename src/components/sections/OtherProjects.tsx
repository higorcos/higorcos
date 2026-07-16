import { ArrowUpRight, Lock } from "lucide-react"
import Container from "../ui/Container"
import Reveal from "../ui/Reveal"
import { otherProjects } from "../../data/projects"

export default function OtherProjects() {
  return (
    <section className="py-12">
      <Container>
        <Reveal className="mb-8">
          <p className="font-headline text-sm font-semibold uppercase tracking-[0.2em] text-brand-100/50">
            Outros projetos
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {otherProjects.map((project, i) => {
            const card = (
              <div className="group relative h-56 overflow-hidden rounded-xl border border-brand-400/15 bg-brand-800/20 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-[0_0_30px_-5px_rgba(82,137,204,0.4)]">
                {project.private ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-800 to-brand-950 p-4 text-center">
                    <Lock className="h-5 w-5 text-brand-400" />
                  </div>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-brand-950/10" />
                    <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-brand-100/60 opacity-0 transition-opacity group-hover:opacity-100" />
                  </>
                )}

                <div className="absolute inset-x-0 bottom-0 p-4">
                  {project.private && (
                    <span className="mb-2 inline-block rounded-full bg-brand-950/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-brand-100">
                      Privado
                    </span>
                  )}
                  <h4 className="font-headline text-sm font-semibold text-white">
                    {project.title}
                  </h4>
                  <p className="mt-1 line-clamp-2 text-xs leading-snug text-brand-100/70">
                    {project.description}
                  </p>
                </div>
              </div>
            )

            return (
              <Reveal key={project.title} delay={i * 0.06}>
                {project.private ? (
                  card
                ) : (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {card}
                  </a>
                )}
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
