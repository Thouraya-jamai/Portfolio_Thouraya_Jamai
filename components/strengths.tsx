import { Shuffle, Rocket, Layers3 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const strengths = [
  {
    icon: Shuffle,
    title: 'Adaptability',
    text: 'Quickly adapting to new technologies, environments, and project requirements while maintaining high-quality results.',
  },
  {
    icon: Rocket,
    title: 'Fast Learning',
    text: 'Continuously acquiring new skills and rapidly mastering emerging technologies across the AI ecosystem.',
  },
  {
    icon: Layers3,
    title: 'Flexibility',
    text: 'Comfortable working across diverse technologies, multidisciplinary teams, and evolving challenges.',
  },
]

export function Strengths() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <SectionHeading
        eyebrow="Strengths"
        title="What I bring to a team"
        description="Beyond technical skills — the qualities that let me contribute quickly in new environments."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {strengths.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm transition-transform hover:-translate-y-1">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-olive text-primary-foreground">
                <s.icon className="size-6" />
              </span>
              <h3 className="font-heading text-xl font-semibold text-brown">{s.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
