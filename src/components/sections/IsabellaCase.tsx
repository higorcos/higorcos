import { ArrowUpRight, Sparkles } from "lucide-react"
import Container from "../ui/Container"
import Reveal from "../ui/Reveal"
import { isabellaCase } from "../../data/projects"

export default function IsabellaCase() {
  return (
    <section className="py-12">
      <Container>
        <Reveal>
          <a
            href={isabellaCase.link}
            target="_blank"
            rel="noreferrer"
            className="group grid items-center gap-10 overflow-hidden rounded-2xl border border-brand-400/20 bg-brand-800/20 p-8 shadow-xl shadow-black/20 transition-colors hover:border-brand-400/50 md:grid-cols-2 md:p-10"
          >
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-200">
                <Sparkles className="h-3.5 w-3.5" />
                Case de design
              </span>
              <h3 className="font-headline text-2xl font-bold text-white">
                {isabellaCase.title}
              </h3>
              <p className="mt-1 text-sm text-brand-400">
                {isabellaCase.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-100/70">
                {isabellaCase.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {isabellaCase.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-200"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Ver case completo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-brand-400/10">
              <div
                className="aspect-video bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${isabellaCase.image}')` }}
              />
            </div>
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
