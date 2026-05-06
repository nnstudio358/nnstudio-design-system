"use client";
import { motion } from "framer-motion";

export default function ClosingCTA() {
  return (
    <section className="w-full bg-bg border-t border-faint">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[800px]"
        >
          <h2 className="font-serif text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-8 md:mb-10">
            If you need senior-level design output without the management overhead —{" "}
            <em className="italic">let&rsquo;s talk.</em>
          </h2>
          <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light mb-4" style={{ color: "#6B6A63" }}>
            I work directly with marketing and brand teams at B2B organizations.
          </p>
          <p className="font-sans text-[16px] md:text-[19px] leading-[1.65] font-light mb-10 md:mb-14" style={{ color: "#6B6A63" }}>
            For agencies: I operate as white-label senior capacity — no client
            management required on your end.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
            <a
              href="/contact"
              className="font-sans text-[14px] tracking-[0.04em] bg-amber text-ink px-9 py-4 hover:bg-[#D4A55A] transition-colors"
            >
              Let&rsquo;s talk →
            </a>
            <a
              href="mailto:nathan@nnstudio.com"
              className="font-sans text-[14px] text-muted hover:text-ink transition-colors"
            >
              nathan@nnstudio.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
