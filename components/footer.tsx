import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thouraya-jamai/', icon: LinkedinIcon },
  { label: 'GitHub', href: 'https://github.com/Thouraya-jamai', icon: GithubIcon },
  { label: 'Email', href: 'mailto:thouraya.jamaii@gmail.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="bg-olive text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-3 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-heading text-lg font-semibold">Thouraya Jamai</p>
          <p className="text-sm text-primary-foreground/70">
            Data Scientist &amp; AI Engineer
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
            >
              <Icon className="size-5" />
            </a>
          ))}
    
        </div>
      </div>
       <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-primary-foreground/70 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Thouraya Jamai. All rights reserved.
        </p>
    </footer>
  )
}
