"use client";

import { useState } from "react";
import NNStudioLogo from "@/components/NNStudioLogo";

const NAV_LINKS = ["Work", "Services", "About", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-faint">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-5 md:px-10 lg:px-16 h-[64px] md:h-[80px]">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <NNStudioLogo height={20} />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="font-sans text-[13px] tracking-[0.04em] text-muted hover:text-ink transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="/contact"
            className="font-sans text-[13px] tracking-[0.04em] text-ink bg-amber px-5 py-2 hover:bg-[#D4A55A] transition-colors lg:mr-2"
          >
            Let&rsquo;s talk →
          </a>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href="/contact"
            className="font-sans text-[14px] tracking-[0.04em] text-ink bg-amber px-4 py-3 hover:bg-[#D4A55A] transition-colors"
          >
            Let&rsquo;s talk →
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-[5px] items-center justify-center w-11 h-11 -mr-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-faint bg-bg">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-5 py-4 font-sans text-[15px] text-ink border-b border-faint hover:bg-[#E8E6E0] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
