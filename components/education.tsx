import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const education = [
  {
    degree: "Master's in Data Science and Smart Services",
    school:
      'Higher Institute of Information and Communication Technologies of Borj Cedria',
    detail:
      'Focused on Artificial Intelligence, Machine Learning, Deep Learning, and intelligent data-driven systems.',
  },
  {
    degree: "Bachelor's in Computer Science",
    Specialization:"Specialization in Big Data, Data Analysis and Data Mining",
    school: 'Higher Institute of Computer Science and Multimedia of Sfax',
    detail:
      'Built a strong foundation in computer science and software development, with a specialization in Big Data, data analytics, data mining, and data visualization.',
  },
]

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <SectionHeading eyebrow="Academic foundation" title="Education" align="left" />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.1}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm transition-transform hover:-translate-y-1">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-olive/10 text-olive">
                <GraduationCap className="size-6" />
              </span>
              <h3 className="font-heading text-xl font-semibold text-brown">{e.degree}</h3>
              <h5 className="font-heading text-l font-semibold text-brown">{e.Specialization}</h5>
              <p className="text-sm font-medium text-olive">{e.school}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
