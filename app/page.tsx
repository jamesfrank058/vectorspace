"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Team from "@/components/team"
import Services from "@/components/services"
import Projects from "@/components/projects"
import BlogPreview from "@/components/blog-preview"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <Hero />
      <About />
      <Team />
      <Services />
      <Projects />
      <BlogPreview />
      <Contact />
      <Footer />
    </div>
  )
}
