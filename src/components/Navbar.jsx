export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow">
      <a href="#" className="text-2xl font-bold text-indigo-600">Muniba</a>
      <ul className="flex gap-6 text-gray-700">
        <li><a href="#about" className="hover:text-indigo-600">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
      </ul>
    </nav>
  );
}