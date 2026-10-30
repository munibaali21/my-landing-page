export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-indigo-600">Muniba</h1>
      <ul className="flex gap-6 text-gray-700">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}