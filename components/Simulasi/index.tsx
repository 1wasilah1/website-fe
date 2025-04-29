'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { isMobile } from 'react-device-detect';


export default function Home() {
  const [amount, setAmount] = useState(1);
  const [tower, setCurrency] = useState('USD');

  const rates = [
    { tower: 'STO', luas: 21, Harga: 16871 },
    { tower: 'STC', luas: 12801, Harga: 12835 },
    { tower: '1BR', luas: 10757, Harga: 10784 },
    { tower: '1BRC', luas: 19115, Harga: 19148 },
    { tower: '2BR', luas: 22404, Harga: 22440 },
    { tower: '2BRC', luas: 22404, Harga: 22440 },
  ];

  const rate = rates.find(r => r.tower === tower);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
          <div>
      <h1>Device Type: {isMobile ? 'Mobile' : 'Desktop'}</h1>
    </div>
      <h1 className="text-3xl font-bold text-center mb-2">Kurs SIRUKIM DPRKP</h1>
      <p className="text-center text-gray-600 mb-8">Informasi kurs rusunawa terkini.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Kurs Valas */}
        <Card className="border-b-4 border-teal-500 rounded-b-none">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Tipe dan Harga Unit</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2">Nuansa Pondok Kelapa Tower Samawa</th>
                    <th className="px-4 py-2">Luas</th>
                    <th className="px-4 py-2">Harga</th>
                  </tr>
                </thead>
                <tbody>
                {rates.map((r) => (
                <tr key={r.tower} className="border-t">
                    <td className="px-4 py-2">{r.tower}</td>
                    <td className="px-4 py-2">{r.luas.toLocaleString('id-ID')}</td>
                    <td className="px-4 py-2">{r.Harga.toLocaleString('id-ID')}</td>
                </tr>
                ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Kurs terakhir diperbarui 28/04/2025 13:50 WIB
            </p>
          </CardContent>
        </Card>

        {/* Konversi Mata Uang */}
        <Card className="border-b-4 border-orange-500 rounded-b-none">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Konversi Mata Uang</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Select value={tower} onValueChange={setCurrency}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Pilih Mata Uang" />
                  </SelectTrigger>
                  <SelectContent>
                    {rates.map((r) => (
                      <SelectItem key={r.tower} value={r.tower}>
                        {r.tower}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="flex-1"
                />
              </div>
              <p className="text-sm text-gray-500 italic">
                Nilai tukar: {tower} 1 ➔ IDR {rate?.luas.toLocaleString('id-ID')},00
              </p>
              <div className="flex items-center gap-2">
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
              </div>
              <Button className="w-full mt-2">Hitung</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
