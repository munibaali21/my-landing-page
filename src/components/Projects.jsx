const projects = [
  {
    title: "Live Portfolio Website",
    desc: "This responsive portfolio, deployed on Vercel.",
    tech: "React, Tailwind, Vercel",
    link: "https://my-landing-page-7tui.vercel.app",
  },
  {
    title: "Source Code",
    desc: "Component-based code and README on GitHub.",
    tech: "React, Tailwind, Git",
    link: "https://github.com/munibaali21/my-landing-page",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 bg-gray-50">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900">
        Projects
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg flex flex-col"
          >
            <h3 className="text-xl font-semibold text-indigo-600">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>
            <p className="mt-3 text-sm text-gray-500">{p.tech}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 self-start"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}