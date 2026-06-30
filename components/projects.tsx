'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { LinkButton } from '@/components/link-button'
import { cn } from '@/lib/utils'

type Category =
  |'Computer Vision'
  | 'NLP'
  | 'Data mining'

const filters = [
  'All',
  'Computer Vision',
  'NLP',
  'Data mining',
] as const

const projects: {
  slug: string
  title: string
  category: Category
  date:string
  image: string
  description: string
  tech: string[]
  github:string
}[] = [
  {
    slug: 'cbvir',
    title: 'Content-Based Video Indexing & Retrieval System',
    category: 'Computer Vision',
    date: 'Dec 2025',
    image: '/images/project-cbvir.png',
    description:
      'A CBVIR deep-learning pipeline that indexes large video collections and retrieves similar content via vector search.',
    tech: ['Indexing','Information Retrieval','Feature extraction','PyTorch','CNN', 'ConvLSTM', 'I3D', 'FAISS', 'Annoy',"OpenCV","Scikit-learn","NumPy",
      "Pandas", 
      "Matplotlib",
      "Katna"],
      
    github:'https://github.com/Thouraya-jamai/Content-Based-Video-Indexing-and-Retrieval-System-CBVIR-',
    
  },


  {
    slug: 'worldcupnlp',
    title: 'Analyzing World Cup Social Media Trends with NLP',
    category: 'NLP',
    date: 'June 2026',
    image: '/images/project-nlp.png',
    description:
      'Topic modeling on World Cup social media data to surface emerging themes and public sentiment trends.',
    tech: ['Topic Modeling','NLTK','BERTopic','KeyBERT', 'NMF', 'TF-IDF','Scikit-learn','Pandas','numpy','Matplotlib','Seaborn' ],
    github:'https://github.com/Thouraya-jamai/worldcup-social-media-behavior-analysis_NLP',
  },
  {
    slug: 'arsl',
    title: 'Arabic Sign Language Recognition Using CNN',
    category: 'Computer Vision',
    date: 'Jan 2025',
    image: '/images/project-signlang.png',
    description:
      'A convolutional neural network classifying Arabic sign language gestures.',
    tech: ['Image Classification', 'CNN', 'TensorFlow','Keras', 'OpenCV','Scikit-Learn'],
    github:'https://github.com/Thouraya-jamai/Arabic-Sign-Language-using-CNN',
  },
  {
    slug: 'diabetespredict',
    title: 'Diabetes Prediction Among Pima Indian Women',
    category: 'Data mining',
    date: 'June 2024',
    image: '/images/project-diabetes.png',
    description:
      'Unsupervised clustering to identify diabetes risk patterns using multiple clustering algorithms.',
    tech: ['K-Means', 'K-Medoids', 'Fuzzy C-Means', 'Scikit-Learn','Pandas','NumPy','Matplotlib','Seaborn'],
  
    github:'https://github.com/Thouraya-jamai/Diabetes-Prediction-project',
  },
]

export function Projects() {
 
  const [active, setActive] = useState<(typeof filters)[number]>('All')

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active)
useEffect(() => {
  console.log('Project page mounted')

  return () => {
    console.log('Project page unmounted')
  }
}, [])

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 pt-5 sm:px-6 md:py-28 lg:px-8">
      <SectionHeading
        eyebrow="personal and academic projects"
        title="Projects"
        
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              active === f
                ? 'border-olive bg-olive text-primary-foreground'
                : 'border-border bg-card text-muted-foreground hover:border-olive/40 hover:text-foreground',
            )}
          >
            {f}
          </button>
        ))}
      </div>

     <div className="mt-10 grid gap-6 sm:grid-cols-2">
  {filtered.map((p) => (
    <article
      key={p.slug}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={p.image || '/placeholder.svg'}
          alt={`${p.title} preview`}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 right-3 top-3 flex justify-between">
          <span className="rounded-full bg-background/85 px-3 py-1 font-mono text-[11px] font-medium text-olive backdrop-blur">
            {p.category}
          </span>

          <span className="rounded-full bg-background/85 px-3 py-1 font-mono text-[11px] font-medium text-brown backdrop-blur">
            {p.date}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-heading text-xl font-semibold text-balance text-brown">
          {p.title}
        </h3>

        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-foreground/75"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <LinkButton
            href={p.github}
            target="_blank"
            rel="noreferrer"
            size="sm"
            className="border border-brown/30 bg-transparent text-brown hover:bg-secondary"
          >
            <GithubIcon className="size-4" />
            View on GitHub
          </LinkButton>

          <LinkButton
            href={`/projects/${p.slug}`}
            size="sm"
            className="border border-olive/30 bg-olive-soft/30 text-brown hover:text-olive/80"
          >
            View Details →
          </LinkButton>
        </div>
      </div>
    </article>
  ))}
</div>    </section>
  )
}

