import emailjs from "@emailjs/browser"
import { FormEvent, useRef, useState } from "react"
import { FaSpinner } from "react-icons/fa"
import { HiCheckCircle, HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2"
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai"

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
        (error) => {
          setError(true)
          setLoading(false)
          console.error(error)
        }
      )
  }

  const contacts = [
    {
      name: "Email",
      description: "higorpinheirocosta@gmail.com",
      link: "mailto:higorpinheirocosta@gmail.com?subject=Olá...",
      icon: <HiOutlineEnvelope className="h-6 w-6" />,
    },
    {
      name: "Github",
      description: "Portfólio",
      link: "https://github.com/higorcos",
      icon: <AiFillGithub className="h-6 w-6" />,
    },
    {
      name: "Linkedin",
      description: "Mídia social",
      link: "https://www.linkedin.com/in/higor--costa/",
      icon: <AiOutlineLinkedin className="h-6 w-6" />,
    },
    {
      name: "São Luís - MA",
      description: "Maranhão",
      link: "https://www.google.com/maps/place/S%C3%A3o+Lu%C3%ADs,+MA/@-2.5606322,-44.258122,12z/data=!3m1!4b1!4m6!3m5!1s0x7f68ff06f7f6d21:0x983102e459a3de47!8m2!3d-2.5306721!4d-44.2988947!16zL20vMDF6cGtw?entry=ttu",
      icon: <HiOutlineMapPin className="h-6 w-6" />,
    },
  ]

  return (
    <section id="contact" className="bg-brand-800 text-brand-100">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <div className="mb-10">
          <h2 className="mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold text-white">
              Fale
            </span>
            <span className="font-handwriting text-4xl text-brand-200">
              Comigo
            </span>
          </h2>
          <p className="text-sm text-brand-100/80">
            Entre em contato por formulário ou pelos canais abaixo, com
            certeza irei poder te ajudar.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row">
          <div className="basis-2/3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block ps-4 font-headline font-semibold"
                >
                  Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-36 w-full rounded-lg border border-brand-400/40 bg-brand-950/30 p-2 outline-none placeholder:text-brand-100/40 focus:border-brand-400"
                  required
                />
              </div>
              <div className="mb-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-grow">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu nome:
                  </label>
                  <input
                    className="w-full rounded-lg border border-brand-400/40 bg-brand-950/30 p-2 outline-none focus:border-brand-400"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="email"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu email:
                  </label>
                  <input
                    className="w-full rounded-lg border border-brand-400/40 bg-brand-950/30 p-2 outline-none focus:border-brand-400"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-md bg-brand-400 px-5 py-2.5 font-headline text-sm font-semibold text-brand-950 transition hover:bg-brand-200 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                  {success && <HiCheckCircle className="h-4 w-4" />}
                  Enviar mensagem
                </button>

                {error && (
                  <p className="mt-2 text-sm text-brand-200">
                    Ocorreu um erro ao enviar a mensagem, tente novamente mais
                    tarde.
                  </p>
                )}
              </div>
            </form>
          </div>
          <div className="basis-1/3">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              {contacts.map((contact, index) => (
                <a
                  key={`contact-${index}`}
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-brand-400/20 bg-brand-950/20 p-3 transition hover:border-brand-400"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-400/15 text-brand-200">
                    {contact.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="font-headline text-sm font-semibold text-white">
                      {contact.name}
                    </p>
                    <p className="truncate text-xs text-brand-100/70">
                      {contact.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
