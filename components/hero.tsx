'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { LinkButton } from '@/components/link-button'
import type { Variants } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
}
const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thouraya-jamai/', icon: LinkedinIcon },
  { label: 'GitHub', href: 'https://github.com/Thouraya-jamai', icon: GithubIcon },
  { label: 'Email', href: 'mailto:thouraya.jamaii@email.com', icon: Mail },
]




export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-40 md:pb-24"
    >
      {/* Decorative organic shapes */}
      <div aria-hidden="true" className="pointer-events-auto absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 size-72 rounded-full bg-olive-muted/50 blur-3xl" />
        <div className="absolute right-0 top-0 size-80 rounded-full bg-olive-soft/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-64 rounded-full bg-brown-soft/25 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8">
        {/* Left */}
        <div className="flex flex-col items-start gap-6">
          

          <motion.h1
            
            initial={{ opacity: 120, x: 1 }}
            animate={{ opacity: 10, x: 1 }}
            transition={{duration: 2, ease: [0.22, 1, 0.36, 1],delay: 0.1,}}
            
            className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-balance text-brown sm:text-6xl md:text-7xl"
          >
            Thouraya Jamai
          </motion.h1>

          <motion.h2
            custom={2}
            initial="hidden"
            animate="visible"
          
            className="text-xl font-medium text-olive sm:text-2xl"
          >
            Data Scientist &amp; AI Engineer
          </motion.h2>

        <motion.p
        initial={{ opacity: 1, x: 120 }}
 
         animate={{ opacity: 1, x: -10 }}
            transition={{duration: 2, ease: [0.22, 1, 0.36, 1],delay: 0.1,}}
  
  className="max-w-xl text-base leading-relaxed text-foreground/90"
>
  Master&apos;s graduate in Data Science and Bachelor&apos;s graduate in Big Data and Data Analytics,
   with experience building end-to-end data solutions, from data preparation and exploratory analysis to visualization, 
   and machine learning and deep learning model development. 
   I focus on transforming raw data into actionable insights and designing intelligent systems using modern AI techniques.
</motion.p>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            
            className="flex flex-wrap items-center gap-3"
          >
            <LinkButton
              href="#projects"
              className="bg-olive text-primary-foreground hover:bg-olive/90"
            >
              View Projects
              <ArrowRight className="size-4" />
            </LinkButton>
            
          </motion.div>

          <motion.div
            custom={6}
            initial={{ opacity: 1, x: 120 }}
            animate={{ opacity: 1, x: 10 }}
            transition={{duration: 2, ease: [0.22, 1, 0.36, 1],delay: 0.1,}}
            className="flex items-center gap-3 pt-2"
          >
            
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-brown transition-all hover:-translate-y-2 hover:shadow-xl hover:border-olive hover:text-olive"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right - portrait */}
        <motion.div
            initial={{ opacity: 1, x: 120 }}
            animate={{ opacity: 1, x: 10 }}
            transition={{duration: 2, ease: [0.22, 1, 0.36, 1],delay: 0.2,}}
            className="relative mx-auto w-full max-w-sm">
          {/* Soft geometric background pattern */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-[3rem] bg-secondary/60"
            style={{ transform: 'rotate(-6deg) scale(0.95)' }}
          />
          <div className="relative aspect-square">
            {/* Olive ring frame */}
            
            <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-card shadow-xl shadow-brown/10">
              <Image
                src="/images/portrait.jpg"
                alt="Portrait of Thouraya Jamai"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 400px"
                className="object-cover"
              />
            </div>

            {/* Botanical / decorative accents */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-3 top-8 flex size-16 items-center justify-center rounded-2xl border border-border bg-card shadow-lg"
            >
              <span className="font-mono text-xs font-semibold text-olive">{'Data'}</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-1/3 -translate-x-1/2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg"
                  > 
             <span className="font-mono text-xs font-semibold text-olive">{'Models'}</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 bottom-12 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg"
            >
              <span className="font-mono text-xs font-semibold text-olive">{'Insights'}</span>
            </motion.div>
            
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} 
                      className="absolute -left-2 bottom-6 translate-x-1/2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg" > 
              <span className="font-mono text-xs font-semibold text-olive">{'AI'}</span> </motion.div>
              
          </div>
        </motion.div>
      </div>
    </section>
  )
}
