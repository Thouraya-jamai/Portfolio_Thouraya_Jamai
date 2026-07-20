import { Mail, Download, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'thouraya.jamaii@gmail.com',
    href: 'mailto:thouraya.jamaii@gmail.com',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: '/in/thouraya-jamai',
    href: 'https://www.linkedin.com/in/thouraya-jamai/',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: '@Thouraya-jamai',
    href: 'https://github.com/Thouraya-jamai',
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 pb-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brown px-6 py-16 text-center text-card md:px-12 md:py-20">
          <div aria-hidden="true" className="pointer-events-auto absolute inset-0">
            <div className="absolute -left-16 -top-16 size-64 rounded-full bg-olive/30 blur-3xl" />
            <div className="absolute -bottom-16 -right-10 size-64 rounded-full bg-olive-soft/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-card/70">
              Contact
            </span>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
              Let&apos;s connect and build impactful solutions together.
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <LinkButton
                href="mailto:thouraya.jamaii@gmail.com"
                className="bg-card text-brown hover:bg-card/90"
              >
                <Mail className="size-4" />
                Get in touch
              </LinkButton>
            
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-card/15 bg-card/5 p-5 transition-colors hover:bg-card/10"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-card/10">
                    <c.icon className="size-5" />
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium">
                    {c.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                  <span className="break-all text-xs text-card/70">{c.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
