const items = [
  {
    title: 'Breezy Pastel Dress',
    subtitle: 'Light • Airy • Elegant',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Soft Co-ord Set',
    subtitle: 'Comfy • Chic • Calm',
    image: 'https://images.unsplash.com/photo-1515734674582-29010bb37906?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Modern Ethnic',
    subtitle: 'Grace • Poise • Timeless',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Chic Tops',
    subtitle: 'Minimal • Soft • Everyday',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Shop() {
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Shop the Collection
          </h2>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Explore the Eloura Collection, where every outfit is a whisper of color and a touch of comfort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <article key={item.title} className="group rounded-2xl overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
                <button className="mt-4 inline-flex items-center rounded-full px-4 py-2 bg-gradient-to-r from-pink-300 to-purple-300 text-gray-900 text-sm font-medium">
                  View
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
