"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUp({
  value,
  duration = 1500,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const started = useRef(false);

  const parseValue = (v: string) => {
    const match = v.match(/^([^0-9]*)([0-9,]+)(.*)$/);
    if (!match) return null;
    return {
      prefix: match[1],
      suffix: match[3],
      target: parseInt(match[2].replace(/,/g, ""), 10),
      useCommas: match[2].includes(","),
    };
  };

  const parsed = parseValue(value);
  const [display, setDisplay] = useState(
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value
  );

  useEffect(() => {
    if (!isInView || started.current || !parsed) return;
    started.current = true;

    const { prefix, suffix, target, useCommas } = parsed;
    const startTime = performance.now();

    function tick(now: number) {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = Math.round(eased * target);
      const formatted = useCommas ? cur.toLocaleString("en-US") : cur.toString();
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref}>{parsed ? display : value}</span>;
}
