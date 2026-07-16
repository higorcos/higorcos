import { GraduationCap } from "lucide-react"
import Container from "../ui/Container"
import Reveal from "../ui/Reveal"
import { educationTimeline, courses } from "../../data/education"

export default function Education() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <Reveal className="mb-12 flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-brand-400" />
          <h3 className="font-headline text-xl font-bold text-white">
            Formação
          </h3>
        </Reveal>

        <div className="relative border-l border-brand-400/20 pl-8">
          {educationTimeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-400 ring-4 ring-brand-950" />
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-400">
                {item.status}
              </span>
              <h4 className="mt-1 font-headline text-base font-semibold text-white">
                {item.title}
              </h4>
              <p className="text-sm text-brand-100/60">{item.institution}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-100/50">
            Cursos complementares
          </p>
          <ul className="flex flex-col gap-2">
            {courses.map((course) => (
              <li key={course} className="text-sm text-brand-100/70">
                {course}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
