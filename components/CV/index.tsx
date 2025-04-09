export default function FinancialSummary() {
    return (
      <section className="bg-green-50 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center gap-6">
          <div>
            <h2 className="text-3xl font-bold text-green-700">102,62 T</h2>
            <p className="text-gray-600">Total Aset (Rp)</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-700">85,4 T</h2>
            <p className="text-gray-600">Total Kredit (Rp)</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-700">4.092</h2>
            <p className="text-gray-600">Total Cabang Pegadaian</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-700">&gt;24 Juta</h2>
            <p className="text-gray-600">Jumlah Nasabah.</p>
          </div>
        </div>
        <p className="text-right text-gray-500 text-sm mt-4">Updated Feb 3, 2025</p>
      </section>
    );
  }
  