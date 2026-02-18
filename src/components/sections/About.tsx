const skills = [
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Deno", slug: "deno" },
  { name: "Bun", slug: "bun" },
  { name: "Express", slug: "express" },
  { name: "Redux", slug: "redux" },
  { name: "Recoil", slug: "recoil" },
  { name: "Vite", slug: "vite" },
  { name: "Rollup", slug: "rollupdotjs" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "npm", slug: "npm" },
  { name: "pnpm", slug: "pnpm" },
  { name: "yarn", slug: "yarn" },
  { name: "Figma", slug: "figma" },
  { name: "Three.js", slug: "threedotjs" },
  { name: "Astro", slug: "astro" },
  { name: "GSAP", slug: "greensock" },
  { name: "Pandas", slug: "pandas" },
  { name: "NumPy", slug: "numpy" },
  { name: "Vercel", slug: "vercel" },
  { name: "Netlify", slug: "netlify" }
];

function SkillBlock({ skill }: { skill: { name: string; slug: string } }) {
  return (
    <div
      className="
        w-40 h-40
        flex-shrink-0
        flex items-center justify-center
        bg-neutral-100
        rounded-2xl
        mx-6
        transition-all duration-300
        hover:scale-105
        hover:shadow-md
        group
      "
    >
      <img
        src={`https://cdn.simpleicons.org/${skill.slug}`}
        alt={skill.name}
        className="
          w-16 h-16
          grayscale
          opacity-70
          transition-all duration-300
          group-hover:grayscale-0
          group-hover:opacity-100
        "
      />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="px-6 py-32 bg-white">

      <div className="max-w-5xl mx-auto">

        {/* About */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">
            About
          </h2>

          <div className="max-w-3xl mx-auto space-y-8 text-[1.05rem] md:text-lg leading-[1.9] text-neutral-600">
            <p>
              I am a detail-oriented Software Engineer specializing in full-stack
              development within modern JavaScript and TypeScript ecosystems.
              I have hands-on experience building, optimizing, and maintaining
              scalable web applications and open-source frameworks used in
              real-world environments.
            </p>

            <p>
              My primary stack includes React, Next.js, Node.js, and TypeScript,
              with experience designing structured client–server architectures,
              RESTful APIs, and performance-optimized frontends.
            </p>

            <p>
              Beyond application development, I have designed and published
              open-source libraries and frameworks, including a lightweight state
              management library and a signal-based frontend framework distributed
              via npm. I enjoy working at the architectural level—building tooling,
              routing systems, and developer experience improvements.
            </p>

            <p className="text-neutral-800 font-medium">
              Technically rigorous, product-aware, and quality-focused, I aim to
              contribute to enterprise-grade systems where performance,
              reliability, and engineering discipline matter.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-32">
          <h3 className="text-3xl font-semibold tracking-tight text-center mb-16">
            Education
          </h3>

          <div className="max-w-2xl mx-auto space-y-12 text-neutral-600">
            <div>
              <p className="text-lg font-medium text-neutral-900">
                Master of Computer Applications (MCA)
              </p>
              <p className="mt-2">
                Siliguri Institute of Technology · 2022–2024 · CGPA 7.72
              </p>
            </div>

            <div>
              <p className="text-lg font-medium text-neutral-900">
                Bachelor of Computer Applications (BCA)
              </p>
              <p className="mt-2">
                Siliguri Institute of Technology · 2019–2022 · CGPA 9.09
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-32">
          <h3 className="text-3xl font-semibold tracking-tight text-center mb-16">
            Experience
          </h3>

          <div className="max-w-3xl mx-auto">
            <div className="border-l border-neutral-200 pl-8">
              <p className="text-lg font-medium text-neutral-900">
                Freelance Software Engineer (Remote)
              </p>

              <p className="text-neutral-500 mt-2 mb-8">
                July 2024 – Present
              </p>

              <ul className="space-y-4 text-neutral-600 list-disc pl-5 leading-[1.8]">
                <li>
                  Designed, built, and maintained web applications using MERN and Next.js, improving performance, scalability, and maintainability.
                </li>
                <li>
                  Developed responsive, accessible UIs with React, TypeScript, and Tailwind CSS aligned with modern UI/UX practices.
                </li>
                <li>
                  Collaborated on API integration, authentication systems, CI/CD workflows, and REST API development.
                </li>
                <li>
                  Optimized codebases and deployment pipelines, reducing load times and improving long-term maintainability.
                </li>
                <li>
                  Participated in code reviews, pair programming, and technical discussions; mentored developers on best practices and code quality standards.
                </li>
                <li>
                  Contributed to the design and development of internal libraries and engineering tools.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Tech Stack */}
      <div className="mt-32">

        <h3 className="text-3xl font-semibold tracking-tight text-center mb-16">
          Tech Stack
        </h3>

        <div className="relative overflow-hidden">

          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="space-y-14">

            <div className="flex hover:[animation-play-state:paused]">
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, i) => (
                  <SkillBlock key={`top-${i}`} skill={skill} />
                ))}
              </div>
            </div>

            <div className="flex hover:[animation-play-state:paused]">
              <div className="flex animate-marquee-reverse">
                {[...skills, ...skills].map((skill, i) => (
                  <SkillBlock key={`bottom-${i}`} skill={skill} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}