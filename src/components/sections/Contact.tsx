export default function Contact() {
  return (
    <section className="relative px-6 py-44 bg-white overflow-hidden">

      {/* Subtle Pink Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,5,25,0.06),transparent_40%)]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12 text-black">
          Let’s build something meaningful.
        </h3>

        {/* Supporting Copy */}
        <p className="text-lg md:text-xl text-neutral-600 leading-[1.85] max-w-2xl mx-auto mb-20">
          I’m available for freelance projects, architectural consulting engagements 
          and fulltime software engineering, frontend, fullstack and product engineering roles,.
          If you're building performance-critical systems or scalable platforms,
          let’s connect.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:samiranghoshofficial04@gmail.com"
          className="
            inline-flex items-center justify-center
            px-12 py-4
            rounded-full
            text-white
            text-base font-medium
            bg-pink-950
            transition-all duration-300
            hover:opacity-95
            hover:scale-[1.03]
            active:scale-[0.98]
            shadow-lg shadow-pink-950/10
          "
        >
          Get in Touch
        </a>

        {/* Secondary Links */}
        <div className="mt-16 flex justify-center gap-10 text-sm font-medium text-neutral-600">

          <a
            href="https://www.linkedin.com/in/samiranghosh04/"
            target="_blank"
            className="relative group"
          >
            LinkedIn
            <span
              className="
                absolute left-0 -bottom-1 h-[2px] w-0
                bg-pink-950
                transition-all duration-300
                group-hover:w-full
              "
            />
          </a>

          <a
            href="https://github.com/samiranghosh04"
            target="_blank"
            className="relative group"
          >
            GitHub
            <span
              className="
                absolute left-0 -bottom-1 h-[2px] w-0
                bg-pink-950
                transition-all duration-300
                group-hover:w-full
              "
            />
          </a>

        </div>

        {/* Response Line */}
        <p className="mt-12 text-xs tracking-wide text-neutral-400 uppercase">
          Typically responds within 24 hours
        </p>

      </div>
    </section>
  );
}