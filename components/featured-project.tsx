'use client'

import Image from 'next/image'
import { ArrowRight, Film, Layers, Network, Database } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'

const pipeline = [
  { icon: Film, label: 'Keyframe Extraction' },
  { icon: Layers, label: 'CNN Embeddings' },
  { icon: Network, label: 'ConvLSTM / I3D' },
  { icon: Database, label: 'FAISS Indexing' },
]

const badges = [
  'PyTorch',
  'CNN',
  'ConvLSTM',
  'I3D',
  'FAISS',
  'Vector Search',
  'OpenCV',
  'Python',
]

const highlights = [
  'Large-scale video retrieval',
  'Deep feature extraction',
  'Vector similarity search',
  'Scalable indexing pipeline',
]

export function FeaturedProject() {
  return (
    <section className="bg-olive py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em]">
            Featured Project
          </span>
          <h2 className="font-heading text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
            Content-Based Video Indexing &amp; Retrieval System
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-primary-foreground/85">
            A deep-learning pipeline (CBVIR) that indexes large video collections and
            retrieves visually similar content using learned embeddings and approximate
            nearest-neighbor search.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <Reveal className="overflow-hidden rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5">
            <div className="relative aspect-[16/11]">
              <Image
                src="/images/project-cbvir.png"
                alt="Visualization of the content-based video indexing and retrieval architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                <h3 className="font-heading text-lg font-semibold">Problem &amp; Methodology</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-primary-foreground/85">
                  Searching massive video archives by content is hard. CBVIR extracts
                  representative keyframes, encodes them with CNN, ConvLSTM and I3D
                  models for spatio-temporal features, then builds a FAISS index to power
                  fast similarity search across the collection.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                <h3 className="font-heading text-lg font-semibold">Architecture workflow</h3>
                <ol className="mt-4 flex flex-col gap-3">
                  {pipeline.map((step, i) => (
                    <li key={step.label} className="flex items-center gap-3">
                      <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary-foreground/15">
                        <step.icon className="size-4" />
                      </span>
                      <span className="text-sm font-medium">{step.label}</span>
                      {i < pipeline.length - 1 && (
                        <ArrowRight className="ml-auto size-4 text-primary-foreground/50" />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-8 grid gap-6 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 md:grid-cols-2 md:p-8">
          <div>
            <h3 className="font-heading text-lg font-semibold">Key achievements</h3>
            <ul className="mt-3 grid gap-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-primary-foreground/85">
                  <span className="size-1.5 rounded-full bg-primary-foreground" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 md:items-end md:text-right">
            <div className="flex flex-wrap gap-2 md:justify-end">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-primary-foreground/25 px-3 py-1 font-mono text-xs"
                >
                  {b}
                </span>
              ))}
            </div>
            <LinkButton
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-fit bg-primary-foreground text-olive hover:bg-primary-foreground/90"
            >
              <GithubIcon className="size-4" />
              View on GitHub
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
