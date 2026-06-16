import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Architecture } from '@/components/architecture'
import { Experience } from '@/components/experience'
import { Certifications } from '@/components/certifications'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScreenshotGallery } from '@/components/ScreenshotGallery'


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Architecture />
      <Experience />
      <ScreenshotGallery />
      <Projects />
      <Contact />
      <Footer />
      
    </main>
  )
}
