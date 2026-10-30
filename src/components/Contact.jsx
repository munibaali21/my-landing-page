export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16 max-w-xl mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Contact Me</h2>
      <p className="mt-4 text-gray-600">Let's work together. Send me a message!</p>
      <div className="mt-8 flex flex-col gap-4 text-left">
        <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded-lg" />
        <textarea placeholder="Your Message" rows="4" className="p-3 border rounded-lg"></textarea>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Send Message
        </button>
      </div>
    </section>
  );
}