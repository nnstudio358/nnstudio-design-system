const PILLARS = [
  {
    name: "On-Time.",
    body: "Enterprise launches don\u2019t have flex dates. Neither do I. 100% on-time delivery record across enterprise launches and high-stakes agency workstreams.",
  },
  {
    name: "On-Brand.",
    body: "I\u2019ve worked inside the strict brand systems of regulated healthcare, enterprise fintech, and global tech platforms. Your guidelines aren\u2019t a constraint \u2014 they\u2019re where I start.",
  },
  {
    name: "Un-Pretentious.",
    body: "Senior-level judgment means fewer revision cycles and faster time to market. No ego, no missed deadlines, no hand-holding required.",
  },
];

export default function Pillars() {
  return (
    <section className="w-full bg-bg border-t border-faint">
      <div className="max-w-[1440px] mx-auto px-16 py-32">

        <h2 className="font-serif text-[52px] font-normal leading-[1.1] text-ink tracking-[-0.02em] mb-20">
          How I work.
        </h2>

        <div className="grid grid-cols-3 gap-16 border-t border-faint pt-16">
          {PILLARS.map(({ name, body }) => (
            <div key={name}>
              <div className="flex items-center gap-4 mb-6">
                <span className="shrink-0 w-[6px] h-[6px] rotate-45 bg-amber inline-block" />
                <h3 className="font-serif text-[24px] font-normal text-ink tracking-[-0.01em]">
                  {name}
                </h3>
              </div>
              <p className="font-sans text-[17px] leading-[1.7] font-light" style={{ color: "#6B6A63" }}>
                {body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
