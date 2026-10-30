export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20 bg-indigo-50">
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
        Hi, I'm <span className="text-indigo-600">Muniba Ali</span>
      </h2>
      <p className="mt-4 text-base md:text-xl text-gray-600 max-w-xl">
        Frontend Web Developer building clean, responsive websites with React and Tailwind.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 bg-amber-400 text-gray-900 rounded-lg hover:bg-amber-500">
          Contact Me
        </a>
      </div>
    </section>
  );
}