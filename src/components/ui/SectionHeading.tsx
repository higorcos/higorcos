import Reveal from "./Reveal"

type SectionHeadingProps = {
  kicker: string
  title: string
  accent?: string
  description?: string
  align?: "center" | "left"
}

export default function SectionHeading({
  kicker,
  title,
  accent,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <Reveal className={`mb-14 max-w-2xl ${alignment}`}>
      <span className="mb-3 block font-headline text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
        {kicker}
      </span>
      <h2 className="font-headline text-3xl font-bold text-white md:text-4xl">
        {title} {accent && <span className="text-brand-200">{accent}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-brand-100/70">{description}</p>
      )}
    </Reveal>
  )
}
