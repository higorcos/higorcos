import Container from "../ui/Container"
import Reveal from "../ui/Reveal"
import SectionHeading from "../ui/SectionHeading"
import { services } from "../../data/services"

export default function Services() {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionHeading
          kicker="Serviços"
          title="Como posso"
          accent="ajudar"
          description="Do primeiro protótipo à infraestrutura em produção."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={i * 0.05}>
                <div className="group h-full rounded-xl border border-brand-400/15 bg-brand-800/20 p-6 transition-all hover:-translate-y-1 hover:border-brand-400/50">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-400/10 text-brand-400 transition-colors group-hover:bg-brand-400/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-headline text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-100/70">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
