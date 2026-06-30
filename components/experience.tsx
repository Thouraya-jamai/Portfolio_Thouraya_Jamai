
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const experiences = [
  {
    role: 'Data Scientist Intern',
    org: 'Informatics and Complex Systems Lab',
    year: 'Mar 2025 – Dec 2025',
    description:
    'Designed and developed an end-to-end Content-Based Video Retrieval (CBVIR) system for large-scale video indexing and similarity search, leveraging deep learning models and vector databases for efficient retrieval.',
    highlights: ['Video Retrieval Systems','Feature extraction',, 'Similarity Search', 'Deep Learning','PyTorch', 'OpenCV', 'Scikit-learn', 'FAISS', 'Annoy', 'NumPy', 'Pandas', 'Matplotlib', 'Katna.'],
  },
  {
    role: 'Flutter Developer Intern',
    org: 'Fidness',
    year: 'Mar 2023 – May 2023',
    description:
    'Designed and developed a mobile decision-support application, contributing to customer analytics and user-focused features using Flutter.',
    highlights: ['Mobile Development', 'Decision Support Systems', 'Customer Analytics', 'Flutter', 'Dart', 'Firebase', 'Power BI', 'UML Modeling'],
  },
  {
    role: 'Web Development Intern',
    org: 'National Center for Information Technology',
    year: 'Jul 2022 – Aug 2022',
    description:
    'Developed a training management web application using Laravel with MVC Architecture, implementing authentication, session scheduling, and administrative dashboards with MySQL database integration.',
    highlights: ['Laravel','PHP', 'MVC Architecture', 'MySQL Database Systems','UML System Design'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional Journey"
          title="Experience"
          align="center"
        />

        <div className="relative mt-12 pl-8">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
          />
          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role} delay={i * 0.1}>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[29px] top-1.5 size-4 rounded-full border-4 border-background bg-olive"
                  />
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-lg font-semibold text-brown">{exp.role}</h3>
                      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{exp.year}</span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-olive">{exp.org}</p>
                     
                    <p className="mt-2 text-sm text-muted-foreground/90 leading-relaxed">{exp.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-foreground/75"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
