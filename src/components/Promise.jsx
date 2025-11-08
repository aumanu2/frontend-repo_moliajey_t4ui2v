export default function Promise() {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white shadow-sm">
            <h3 className="font-semibold text-gray-900">Premium quality fabrics</h3>
            <p className="mt-2 text-gray-700">Materials that feel as good as they look.</p>
          </div>
          <div className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white shadow-sm">
            <h3 className="font-semibold text-gray-900">Soft pastel shades</h3>
            <p className="mt-2 text-gray-700">Inspired by nature’s calm and quiet elegance.</p>
          </div>
          <div className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white shadow-sm">
            <h3 className="font-semibold text-gray-900">Modern designs</h3>
            <p className="mt-2 text-gray-700">Made for every mood and moment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
