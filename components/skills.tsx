import {
  Brain,
  Boxes,
  LineChart,
  Search,
  Code2,
  Terminal,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const categories = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision','Indexing', 'Information Retrieval'],
  },
   {
    icon: LineChart,
    title: 'Data Science & Analytics',
    skills: ['Data Cleaning', 'Data Preprocessing', 'Exploratory Data Analysis (EDA)', 'Statistical Analysis','Feature Engineering','Data Visualization','Predictive Modeling','Model Evaluation'],
  },
  {
    icon: Boxes,
    title: 'Frameworks & Libraries',
    skills: ['PyTorch', 'TensorFlow', 'Keras','NLTK','Scikit-Learn', 'Pandas','numpy','OpenCV','Matplotlib','Seaborn','FAISS', 'Annoy',],
  },
   {
    icon: Boxes,
    title: 'Databases & Business Intelligence',
    skills: ['SQL', 'MySQL', 'Power BI','Excel','Database Design'],
  },
   {
    icon: Terminal,
    title: 'Programming Languages',
    skills: ['Python', 'SQL', 'Dart', 'PHP'],
  },

  {
    icon: Code2,
    title: 'Software Development',
    skills: ['Flutter', 'Laravel', 'Firebase', 'HTML','CSS','PHP','UML','phpMyAdmin','Git', 'GitHub',],
  },
 
  
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-background py-20 md:py-45">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built Through Practice"
          title="Skills"
          
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 3) * 0.08}>
              <div className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-olive/10 text-olive transition-colors group-hover:bg-olive group-hover:text-primary-foreground">
                    <cat.icon className="size-5" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-brown">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
