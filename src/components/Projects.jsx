const projects = [
  { title: "Project One", desc: "A responsive website built with React." },
  { title: "Project Two", desc: "A landing page designed with Tailwind CSS." },
  { title: "Project Three", desc: "A portfolio layout with reusable components." },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 bg-gray-50">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900">
        Projects
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div key={p.title} className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}