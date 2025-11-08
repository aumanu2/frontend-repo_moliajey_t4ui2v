export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">About Us – The Story of Eloura</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Born from a love for pastel tones and timeless fashion, Eloura was created to celebrate the gentle strength and effortless grace of today’s woman. Our mission is simple — to design pieces that make you feel confident, calm, and beautifully yourself.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Each collection is thoughtfully curated with soft fabrics, delicate hues, and minimal silhouettes — inspired by sunrise skies, fresh blooms, and quiet moments of joy. We believe that fashion doesn’t need to be loud to be noticed. At Eloura, it’s about subtle beauty, comfort that lasts, and style that speaks without words.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Whether you’re dressing for your everyday glow or a special occasion, our designs remind you to slow down, breathe, and fall in love with yourself again.
            </p>
            <p className="mt-6 font-medium text-purple-800">Eloura — Pastel dreams, elegant you.</p>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 p-1 shadow-inner">
              <div className="w-full h-full rounded-3xl bg-white/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
