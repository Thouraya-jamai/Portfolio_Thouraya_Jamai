"use client"

import { useState } from 'react'
import { BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

type CertCategory =
  | 'Artificial Intelligence & GenAI'
  | 'Machine Learning & NLP'
  | 'Web Development'

const filters = [
  'All',
  'Artificial Intelligence & GenAI',
  'Machine Learning & NLP',
  'Web Development',
] as const

const certs: {
  title: string
  issuer: string
  date: string
  link?: string
  category: CertCategory
}[] = [
  {
  title: 'Human Skills in the Age of AI',
  issuer: 'Microsoft & LinkedIn Learning',
  date: 'Jul-2026',
  link: 'https://www.linkedin.com/learning/certificates/16bd075bac2796c55dabb1c670cfb4eec161ab1f24db119182c18093f8af4264?trk=share_certificate',
  category: 'Artificial Intelligence & GenAI',
},
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn Learning',
    date: 'Mar-2026',
    link: 'https://www.linkedin.com/learning/certificates/6731d6d9859cee6db3f6abf7f8418ebd85e0477153f95fc3c111c1685668b48a',
    category: 'Artificial Intelligence & GenAI',
  },
  {
    title: 'Natural Language Processing in Python',
    issuer: 'DataCamp',
    date: 'Feb-2026',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/d1b208001844c9af23a69d7b399bc0752acf7aa5',
    category: 'Machine Learning & NLP',
  },
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'LinkedIn Learning / NASBA',
    date: 'Jan-2026',
    link: 'https://www.linkedin.com/learning/certificates/a4dd34be036313b1c122fb161bf3d5c1d3ee1a59e61a0707de06e0b55a640fef?trk=share_certificate',
    category: 'Artificial Intelligence & GenAI',
  },
  {
    title: 'What is Generative AI',
    issuer: 'LinkedIn Learning',
    date: 'Jul-2025',
    link: 'https://www.linkedin.com/learning/certificates/ceafb7edb6b291d0ccee136fa266c8ca0b4fee1ecf623000993080c34ca2d641?trk=share_certificate',
    category: 'Artificial Intelligence & GenAI',
  },
  {
    title: 'Essentials of JavaScript',
    issuer: 'LinkedIn Learning',
    date: 'Mar-2022',
    link: '',
    category: 'Web Development',
  },
  {
    title: 'Introduction to HTML & CSS',
    issuer: 'Microsoft',
    date: 'May-2021',
    link: '',
    category: 'Web Development',
  },
  {
    title: 'HTML Essential Training',
    issuer: 'LinkedIn Learning',
    date: 'Mar-2021',
    link: '',
    category: 'Web Development',
  },
]

export function Certifications() {
  const [showAll, setShowAll] = useState(false)
  const [active, setActive] =
    useState<(typeof filters)[number]>('All')

  // filter by category
  const filteredCerts =
    active === 'All'
      ? certs
      : certs.filter((c) => c.category === active)

  // show only 6 unless expanded
  const visibleCerts = showAll
    ? filteredCerts
    : filteredCerts.slice(0, 6)

  return (
    <section
      id="certifications"
      className="scroll-mt-20 bg-secondary/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="continuous Learning"
          title="Certifications"
        />

        {/* FILTER BUTTONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActive(f)
                setShowAll(false)
              }}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === f
                  ? 'border-olive bg-olive text-white'
                  : 'border-border bg-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* CERTIFICATES GRID */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {visibleCerts.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">

                {/* HEADER */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-olive/10 text-olive">
                    <BadgeCheck className="size-6" />
                  </span>

                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Certified
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="font-heading text-lg font-semibold text-balance text-brown">
                  {c.title}
                </h3>

                {/* FOOTER */}
                <div className="mt-auto flex items-center justify-between text-sm">
                  <p className="font-medium text-olive">{c.issuer}</p>
                  <span className="text-xs text-muted-foreground">
                    {c.date}
                  </span>
                </div>

                {/* BUTTON (NEW) */}
                {c.link && (
                      <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-brown/30 bg-transparent px-4 py-2 text-sm font-medium text-brown transition hover:bg-secondary"
                    >
                  Show credential
                   </a>
                  )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* SHOW MORE BUTTON */}
        {filteredCerts.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-full border border-border bg-card px-6 py-2 text-sm font-medium text-olive shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {showAll ? 'Show less' : 'Show more'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}