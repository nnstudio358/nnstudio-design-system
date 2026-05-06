"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

const METRICS = [
  { value: "8,000+", label: "Unique views" },
  { value: "800+",   label: "eBook downloads" },
  { value: "65%",    label: "Conversion rate" },
];

export default function TurnoFeature() {
  return (
    <section className="w-full bg-ink">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:pt-24 md:pb-32">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="font-sans text-[13px] tracking-[0.14em] uppercase mb-6 text-amber">
            Featured work
          </div>

          <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] tracking-[-0.02em] mb-10 md:mb-16 max-w-[820px]" style={{ color: "#F4F3EF" }}>
            A content system that converted 65% of visitors into new signups.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-start">

          {/* Left — body copy, metrics, CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] font-light mb-10 md:mb-16" style={{ color: "#C8C2BA" }}>
              Turno needed one system that worked across three formats — a digital
              guide, a downloadable eBook, and a print coffee table book — all for
              the same audience, under the same brand.
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-14 border-t pt-8 md:pt-10" style={{ borderColor: "#252523" }}>
              {METRICS.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-serif text-[28px] md:text-[36px] font-normal tracking-[-0.02em]" style={{ color: "#C8923A" }}>
                    <CountUp value={value} />
                  </div>
                  <div className="font-sans text-[13px] md:text-[15px] font-light mt-1" style={{ color: "#C8C2BA" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-block font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
            >
              Let&rsquo;s talk →
            </a>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <Image
              src="/turno-dualstack.png"
              alt="Turno — How to Start an Airbnb: coffee table book and digital guide"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
