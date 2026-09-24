'use client'
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'

import ScrollStatement from '@/components/ui/ScrollStatement'

import Hero from './Hero'
import Marquee from './Marquee'
import HowToParticipate from './HowToParticipate'
import Prize from './Prize'
import Gallery from './Gallery'
import Pricing from './Pricing'
import DrawCountdown from './DrawCountdown'
import SorteoForm from './SorteoForm'
import Partner from './Partner'

export default function SorteoLanding() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-lagoon via-reef to-solaz"
        style={{ scaleX: progress }}
      />
      <main className="overflow-x-clip bg-ocean text-white selection:bg-lagoon selection:text-ocean">
        <Hero />
        <Marquee />
        <HowToParticipate />
        <Prize />
        <Gallery />
        <ScrollStatement
          className="text-sand"
          text="No esperes más y no te pierdas este espectacular viaje."
        />
        <Pricing />
        <DrawCountdown />
        <SorteoForm />
        <Partner />
      </main>
    </MotionConfig>
  )
}
