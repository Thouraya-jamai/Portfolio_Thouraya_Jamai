'use client'
import { GraduationCap, Brain, Briefcase, Award } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const stats = [
  { icon: GraduationCap, value: "Master's Degree", label: 'in Data Science' },
  { icon: Brain, value: '5+ Projects', label: ' in AI & Data Science' },
  { icon: Briefcase, value: '3 Professional Internships', label: '' },
  { icon: Award, value: '5+ Certifications', label: '' },
]

export function About() {
  useEffect(() => {
  console.log('About mounted')
}, [])
  return (
    <section id="About" className=" bg-secondary/40 ">
   <section
  id="about"
  className="mx-auto max-w-6xl scroll-mt-10 px-4 py-10 sm:py-16 md:py-20 lg:px-8"
>
  

  
      <SectionHeading title="About Me" align="left" />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
          <div className="flex flex-col gap-5 text-pretty leading-relaxed text-foreground/90">
            <p>
             I am a Data Scientist and AI Engineer who enjoys working with data from its raw form to meaningful intelligence. My work naturally starts with understanding and preparing data, followed by exploratory analysis and visualization, before moving into model building and evaluation using machine learning and deep learning techniques.
             </p>
             <p>
             Through academic studies and certification projects, I have developed hands-on experience in designing end-to-end data workflows that connect data processing, analysis, and predictive modeling into a single structured process.  </p>
          
            <p>
              What defines me most is how I work: I adapt quickly, learn fast, Curious to learn more, and try to understand the “why” before jumping into the “how”. 
      
            </p>
            
          </div>
          
        </Reveal>

        <div className="flex flex-col gap-4">
  <div className="flex flex-col gap-4">

  {/* STATS (smaller cards) */}
  <div className="grid grid-cols-2 gap-3">

    {stats.map((stat, i) => (
     <Reveal
  key={`${stat.label}-${i}`}
  delay={i * 0.08}
  className="translate-x-0"
>
        <div className="flex flex-col gap-2 rounded-xl border border-border bg-card/80 p-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">

          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-olive/10 text-olive">
            <stat.icon className="size-4" />
          </span>

          <p className="font-heading text-lg font-semibold text-brown">
            {stat.value}
          </p>

          <p className="text-[11px] text-muted-foreground">
            {stat.label}
          </p>

        </div>
      </Reveal>
    ))}

  </div>

  {/* SOFT SKILLS */}

  <div className="mt-2">
    <p className="mb-2 text-[17px] uppercase tracking-wider text-olive">
      What I bring to the team
    </p>

    <div className="grid grid-cols-2 gap-2">
  {[
    'Adaptability',
    'Fast Learning',
    'Analytical Thinking',
    'Curiosity',
  ].map((skill) => (
    <div
      key={skill}
      className="rounded-xl border border-olive/20 bg-brown-soft/10 px-3 py-2 text-xs font-medium text-brown shadow-sm transition-all hover:-translate-y-1 hover:shadow-md flex items-center justify-center"
    >
      {skill}
    </div>
  ))}
</div>
  </div>


</div>

 
</div>
      </div>
   
    </section>
    </section>
  )
}
