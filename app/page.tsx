'use client'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Certifications } from '@/components/certifications'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { useEffect } from 'react'





export default function Page() {
  console.log('Rendering app/page')
  useEffect(() => {
  console.log('Home page mounted')
}, [])
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
