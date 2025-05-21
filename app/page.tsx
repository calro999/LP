import Hero from "@/components/hero"
import Features from "@/components/features"
import GamesShowcase from "@/components/games-showcase"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <GamesShowcase />
      <Testimonials />
      <CTA />
    </main>
  )
}
