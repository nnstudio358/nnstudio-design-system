"use client";
import { motion } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    name: "On-Time.",
    body: "Enterprise launches don't have flex dates. Neither do I. 100% on-time delivery record across enterprise launches and high-stakes agency workstreams.",
  },
  {
    number: "02",
    name: "On-Brand.",
    body: "I've worked inside the strict brand systems of regulated healthcare, enterprise fintech, and global tech platforms. Your guidelines aren't a constraint — they're where I start.",
  },
  {
    number: "03",
    name: "Un-Pretentious.",
    body: "Senior-level judgment means fewer revision cycles and faster time to market. No ego, no missed deadlines, no hand-holding required.",
  },
];


export default function ProblemAndPillars() {
  return (
    <section className="w-full border-t border-faint bg-bg">

      {/* Problem */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center"
      >
        <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8 md:mb-10">
          Design shouldn&rsquo;t be a bottleneck.
        </h2>
        <div className="space-y-6 font-sans text-[16px] md:text-[19px] leading-[1.65] font-light max-w-[640px]" style={{ color: "#6B6A63" }}>
          <p>
            If you&rsquo;re running an in-house marketing or brand team, you&rsquo;ve felt it:
            senior designers who need constant direction, revision cycles that eat your
            timeline, and final files that create more work than they solve.
          </p>
          <p>
            You don&rsquo;t need more overhead. You need someone who takes the brief,
            asks the right questions once, and delivers.
          </p>
        </div>
      </motion.div>

      {/* Pillars */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pb-16 md:pb-24 lg:pb-32">
        <div className="border border-faint grid grid-cols-1 lg:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: index * 0.1 }}
              className="px-8 md:px-12 py-10 md:py-12"
            >
              <div className="font-sans text-[13px] tracking-[0.12em] text-amber mb-5">
                {pillar.number}
              </div>
              <h3 className="font-serif text-[32px] md:text-[36px] lg:text-[40px] italic font-normal leading-[1.1] tracking-[-0.02em] text-ink mb-6">
                {pillar.name}
              </h3>
              <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light" style={{ color: "#6B6A63" }}>
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
