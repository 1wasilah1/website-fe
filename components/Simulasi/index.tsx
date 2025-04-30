"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [tower, setTower] = useState("");
  const [tahunCicilan, setTahunCicilan] = useState("5");
  const [selectedSimulasi, setSelectedSimulasi] = useState([]);

  const rates = [
    { tower: "22.1 ST.C", luas: 22.1, harga: 225420000 },
    { tower: "22.6 ST.B", luas: 22.6, harga: 230520000 },
    { tower: "23.4 ST", luas: 23.4, harga: 238680000 },
    { tower: "24.2 STA", luas: 24.2, harga: 246840000 },
    { tower: "34.2 2B.B", luas: 34.2, harga: 395753850 },
    { tower: "36 2B.A", luas: 36, harga: 416583000 },
  ];

  const tahun = [
    { cicilan: "5" },
    { cicilan: "10" },
    { cicilan: "15" },
    { cicilan: "20" },
  ];

  const dataSimulasi = [
    { tower: "22.1 ST.C", tipe: "5", luas: 22.1, biaya: 2390929 },
    { tower: "22.1 ST.C", tipe: "10", luas: 22.1, biaya: 2090000 },
    { tower: "22.1 ST.C", tipe: "15", luas: 22.1, biaya: 1782607 },
    { tower: "22.1 ST.C", tipe: "20", luas: 22.1, biaya: 1487672 },

    { tower: "22.6 ST.B", tipe: "5", luas: 22.6, biaya: 2445022 },
    { tower: "22.6 ST.B", tipe: "10", luas: 22.6, biaya: 2091000 },
    { tower: "22.6 ST.B", tipe: "15", luas: 22.6, biaya: 1822937 },
    { tower: "22.6 ST.B", tipe: "20", luas: 22.6, biaya: 1521330 },

    { tower: "23.4 ST", tipe: "5", luas: 23.4, biaya: 2531572 },
    { tower: "23.4 ST", tipe: "10", luas: 23.4, biaya: 2100000 },
    { tower: "23.4 ST", tipe: "15", luas: 23.4, biaya: 1887466 },
    { tower: "23.4 ST", tipe: "20", luas: 23.4, biaya: 1575182 },

    { tower: "24.2 STA", tipe: "5", luas: 24.2, biaya: 2618121 },
    { tower: "24.2 STA", tipe: "10", luas: 24.2, biaya: 2290000 },
    { tower: "24.2 STA", tipe: "15", luas: 24.2, biaya: 1951995 },
    { tower: "24.2 STA", tipe: "20", luas: 24.2, biaya: 1629035 },

    { tower: "34.2 2B.B", tipe: "5", luas: 34.2, biaya: 4197584 },
    { tower: "34.2 2B.B", tipe: "10", luas: 34.2, biaya: 3800500 },
    { tower: "34.2 2B.B", tipe: "15", luas: 34.2, biaya: 3129596 },
    { tower: "34.2 2B.B", tipe: "20", luas: 34.2, biaya: 2611800 },

    { tower: "36 2B.A", tipe: "5", luas: 36, biaya: 4418509 },
    { tower: "36 2B.A", tipe: "10", luas: 36, biaya: 4000300 },
    { tower: "36 2B.A", tipe: "15", luas: 36, biaya: 3294312 },
    { tower: "36 2B.A", tipe: "20", luas: 36, biaya: 2749263 },
  ];

  const rate = rates.find((r) => r.tower === tower);

  function hitungSimulasi() {
    const filter = dataSimulasi.find(
      (value) => value.tower === tower && value.tipe === tahunCicilan
    );
    setSelectedSimulasi([filter]);
  }

  useEffect(() => {
    setSelectedSimulasi([]);
  }, [tower, tahunCicilan]);

  return (
    <div className="bg-[#104c61] py-10 px-4 font-[inherit]">
      <h1 className="text-3xl font-bold text-center mb-2 text-[#f98025]">
        Simulasi Hunian Terjangkau Milik
      </h1>
      <p className="text-center text-white mb-8">
        Informasi untuk simulasi hunian terjangkau milik yang tersedia pada
        SIRUKIM saat ini
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <Card className="border-b-4 border-teal-500 rounded-b-none">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Tipe dan Harga Unit Tower Kanaya Nuansa Cilangkap
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2">Tipe Hunian</th>
                    <th className="px-4 py-2">Luas</th>
                    <th className="px-4 py-2">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((r) => (
                    <tr key={r.tower} className="border-t">
                      <td className="px-4 py-2">{r.tower}</td>
                      <td className="px-4 py-2">
                        {r.luas.toLocaleString("id-ID")}
                      </td>
                      <td className="px-4 py-2">
                        Rp {r.harga.toLocaleString("id-ID")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Harga terakhir diperbarui 28/04/2025 13:50 WIB
            </p>
          </CardContent>
        </Card>

        {/* Hitung Simulasi */}
        <Card className="border-b-4 border-orange-500 rounded-b-none">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Hitung Simulasi Cicilan
            </h2>
            <div className="flex flex-col gap-4">
              <div className="items-center gap-2 grid grid-cols-2">
                Tipe Hunian
                <Select value={tower} onValueChange={setTower}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Pilih Tipe Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    {rates.map((r) => (
                      <SelectItem key={r.tower} value={r.tower}>
                        {r.tower}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="items-center gap-2 grid grid-cols-2">
                Jangka Waktu (Tahun)
                <Select value={tahunCicilan} onValueChange={setTahunCicilan}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Jumlah Tahun Cicilan" />
                  </SelectTrigger>
                  <SelectContent>
                    {tahun.map((r) => (
                      <SelectItem key={r.cicilan} value={r.cicilan}>
                        {r.cicilan} Tahun
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <p className="text-sm text-gray-500 italic">
                Bunga Fix 5,00%
                {/* Nilai tukar: {tower} 1 ➔ IDR {rate?.luas.toLocaleString('id-ID')},00 */}
              </p>
              <div>
                <Button
                  className="w-full mt-2 bg-[#f98025] text-white disabled:bg-slate-200"
                  onClick={hitungSimulasi}
                  disabled={tahunCicilan === "" || tower === ""}
                >
                  Hitung
                </Button>
              </div>
              {/* <div className="flex items-center gap-2">
                <Select disabled value="IDR">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="IDR" />
                  </SelectTrigger>
                </Select>
                <Input
                  readOnly
                  value={(amount * (rate?.luas || 0)).toLocaleString('id-ID')}
                  className="flex-1 bg-gray-100"
                />
              </div> */}
            </div>
            {selectedSimulasi && selectedSimulasi.length !== 0 ? (
              <div className="my-4">
                <p className="text-md mb-2">
                  Tahun ke-1 sampai Tahun ke-{tahunCicilan}
                </p>
                <table className="w-full text-sm text-left border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2">Tipe Hunian</th>
                      <th className="px-4 py-2">Luas Tipe</th>
                      <th className="px-4 py-2">Biaya Cicilan Setiap Bulan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedSimulasi.map((r) => (
                      <tr key={r?.tower} className="border-t">
                        <td className="px-4 py-2">{r?.tower}</td>
                        <td className="px-4 py-2">{r?.luas}</td>
                        <td className="px-4 py-2">
                          Rp {r?.biaya.toLocaleString("id-ID")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <></>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
