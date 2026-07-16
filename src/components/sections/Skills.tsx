import Container from "../ui/Container"
import Reveal from "../ui/Reveal"
import SectionHeading from "../ui/SectionHeading"
import { skillCategories } from "../../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionHeading
          kicker="Stack"
          title="Ferramentas do"
          accent="dia a dia"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-brand-400/15 bg-brand-800/20 p-6">
                <h3 className="mb-4 font-headline text-sm font-semibold uppercase tracking-wide text-brand-400">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => {
                    const Icon = skill.icon
                    return (
                      <div
                        key={skill.name}
                        title={skill.name}
                        className="flex items-center gap-2 rounded-lg border border-brand-400/10 bg-brand-950/30 px-3 py-2 text-sm text-brand-100 transition hover:border-brand-400/40"
                      >
                        <Icon className="h-4 w-4 text-brand-400" />
                        {skill.name}
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
