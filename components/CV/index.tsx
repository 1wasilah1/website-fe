export default function FinancialSummary() {
    return (
      <section className="bg-[#104c61] py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center gap-6 mb-3">
          <div>
            <h2 className="text-3xl font-bold text-white">29.566 unit</h2>
            <p className="text-white">Total unit Rusunawa yang disewakan</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">24.725 unit</h2>
            <p className="text-white">Total Unit Rusunawa yang dihuni</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">88.972 jiwa</h2>
            <p className="text-white">Total Penghuni Rusunawa</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">4.841 unit</h2>
            <p className="text-white">Total Rusunawa yang tersedia</p>
          </div>
        </div>
        <p className="text-right text-[#f98025] text-sm mt-4">Updated 11 April 2025</p>
      </section>
    );
  }
  