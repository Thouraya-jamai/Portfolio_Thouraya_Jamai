import { Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const topics = [
  'Large Language Models (LLMs)',
  'Retrieval-Augmented Generation (RAG)',
  'Agentic AI Systems',
  'Social Intelligence & Critical Thinking',
]

export function CurrentlyLearning() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
      <Reveal>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-olive">
                <Sparkles className="size-4" />
                Currently Learning
              </span>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                I believe continuous learning is essential in both technology and human
                collaboration. Alongside advancing my expertise in LLMs, RAG, and Agentic AI systems, 
                I am also actively develop my critical thinking and social intelligence skills aiming to bridge deep technical understanding with strong human-centered communication.
          
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:max-w-xs md:justify-end">
              {topics.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-olive/30 bg-olive/10 px-4 py-2 text-sm font-medium text-olive"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
