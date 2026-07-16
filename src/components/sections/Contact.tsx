import emailjs from "@emailjs/browser"
import { FormEvent, useRef, useState } from "react"
import { Loader2, Mail, MapPin, CheckCircle2 } from "lucide-react"
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai"
import Container from "../ui/Container"
import Reveal from "../ui/Reveal"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.current) return

    setLoading(true)

    emailjs
      .sendForm(
        "service_vd1h1gj",
        "template_7gtcxgn",
        form.current,
        "hwR5L6yqxXoc9vCCn"
      )
      .then(
        () => {
          setSuccess(true)
          setLoading(false)
        },
        (err) => {
          setError(true)
          setLoading(false)
          console.error(err)
        }
      )
  }

  const channels = [
    {
      name: "Email",
      value: "higorpinheirocosta@gmail.com",
      link: "mailto:higorpinheirocosta@gmail.com?subject=Olá...",
      icon: Mail,
    },
    {
      name: "Github",
      value: "@higorcos",
      link: "https://github.com/higorcos",
      icon: AiFillGithub,
    },
    {
      name: "LinkedIn",
      value: "higor--costa",
      link: "https://www.linkedin.com/in/higor--costa/",
      icon: AiOutlineLinkedin,
    },
    {
      name: "Localização",
      value: "São Luís - MA",
      link: "https://www.google.com/maps/place/S%C3%A3o+Lu%C3%ADs,+MA/@-2.5606322,-44.258122,12z/data=!3m1!4b1!4m6!3m5!1s0x7f68ff06f7f6d21:0x983102e459a3de47!8m2!3d-2.5306721!4d-44.2988947!16zL20vMDF6cGtw?entry=ttu",
      icon: MapPin,
    },
  ]

  return (
    <section id="contact" className="py-24">
      <Container>
        <Reveal className="mb-14 text-center">
          <span className="mb-3 block font-headline text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            Contato
          </span>
          <h2 className="mx-auto max-w-xl font-headline text-3xl font-bold text-white md:text-4xl">
            Tem um projeto em mente?{" "}
            <span className="text-brand-200">Vamos conversar.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <Reveal className="md:col-span-3">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="rounded-2xl border border-brand-400/15 bg-brand-800/20 p-6 md:p-8"
            >
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-brand-100"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-32 w-full rounded-lg border border-brand-400/20 bg-brand-950/40 p-3 text-sm text-white outline-none transition focus:border-brand-400"
                  required
                />
              </div>
              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-grow">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-brand-100"
                  >
                    Seu nome
                  </label>
                  <input
                    className="w-full rounded-lg border border-brand-400/20 bg-brand-950/40 p-3 text-sm text-white outline-none transition focus:border-brand-400"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-brand-100"
                  >
                    Seu email
                  </label>
                  <input
                    className="w-full rounded-lg border border-brand-400/20 bg-brand-950/40 p-3 text-sm text-white outline-none transition focus:border-brand-400"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-md bg-brand-400 px-6 py-3 font-headline text-sm font-semibold text-brand-950 transition hover:bg-brand-200 disabled:opacity-60"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {success && <CheckCircle2 className="h-4 w-4" />}
                Enviar mensagem
              </button>

              {error && (
                <p className="mt-3 text-sm text-brand-200">
                  Ocorreu um erro ao enviar a mensagem, tente novamente mais
                  tarde.
                </p>
              )}
            </form>
          </Reveal>

          <div className="flex flex-col gap-3 md:col-span-1">
            {channels.map((channel, i) => {
              const Icon = channel.icon
              return (
                <Reveal key={channel.name} delay={i * 0.06}>
                  <a
                    href={channel.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-brand-400/15 bg-brand-800/20 p-4 transition hover:border-brand-400/50"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-400/15 text-brand-200">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">
                        {channel.name}
                      </p>
                      <p className="truncate text-xs text-brand-100/60">
                        {channel.value}
                      </p>
                    </div>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
