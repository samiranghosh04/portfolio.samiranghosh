const projects = [
  {
    title: "Coral",
    description: "A lightweight open source, experimental DX first, hot-swappable fullstack framework.",
    repo: "GitHub",
    github: "https://github.com/samiranghosh04/coral",
    link: "https://coral-docs.netlify.app/",
    linkName: "Docs",
    tech: "React, TanStack Router, TypeScript, Vinxi, Docusaurus, Netlify"
  },
  {
    title: "Algorithmo Labs",
    description: "A website built for a client using NextJS and TailwindCSS in a time sensitive situation.",
    repo: "",
    github: "",
    link: "https://algoritmolab.com/",
    linkName: "Link",
    tech: "React, NextJS, TypeScript, TailwindCSS, clsx, Vercel"
  },
  {
    title: "ToyScript",
    description: "A lightweight interpreter based programming language built using TypeScript and Deno",
    repo: "GitHub",
    github: "https://github.com/samiranghosh04/toyscript",
    link: "",
    linkName: "",
    tech: "Deno, TypeScript"
  },
  {
    title: "Sea JS",
    description: "A minimal UI renderer with over 800 downloads on npm.",
    repo: "GitHub",
    github: "https://github.com/samiranghosh04/sea-js",
    link: "https://www.npmjs.com/package/sea-js-ui-core",
    linkName: "NPM",
    tech: "JavaScript, rxjs, Rollup, Vite, Jest, chalk, commander, fs-extra"
  },
  {
    title: "Retomizer",
    description: "A atom based state manager for React with over 300 downloads.",
    repo: "GitHub",
    github: "https://github.com/samiranghosh04/retomizer",
    link: "https://www.npmjs.com/package/retomizer",
    linkName: "NPM",
    tech: "TypeScript, React, Rollup"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl font-semibold">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 border border-neutral-200 rounded-xl hover:shadow-md transition"
            >
              <div className="flex flex-row justify-between">  
              <h3 className="text-3xl font-semibold">{project.title}</h3>
              <div className="flex flex-row my-1"> 
                <a className="text-purple-950 font-medium mr-2"href={project.github}>{project.repo}</a>
                <a className="text-purple-950 font-medium mx-2"href={project.link}>{project.linkName}</a>
              </div>
              </div>
              <p className="text-black text-s font-mono mt-2">{project.tech}</p>
              <p className="text-neutral-600 text-xl mt-4 my-2">
                {project.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}