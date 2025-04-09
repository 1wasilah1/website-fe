"use client";

import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password });
  };

  return (
    <div className="flex h-screen">
      {/* Kiri (Gradient background) */}
      <div className="w-1/2 bg-gradient-to-br from-orange-400 to-pink-500 text-white flex flex-col justify-center items-center p-10 rounded-r-[80px]">
        <h1 className="text-4xl font-bold mb-4">Lorem ipsum</h1>
        <p className="text-center max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Kanan (Form login) */}
      <div className="w-1/2 flex flex-col justify-center items-center px-10">
        <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-400 rounded-full p-4">
              <FaUser className="text-white text-2xl" />
            </div>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="E-mail Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="text-right text-sm text-gray-500">
              <a href="#">Forgot your password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2 rounded hover:bg-orange-500 transition"
            >
              LOGIN
            </button>
          </form>
          <div className="text-center mt-4 text-sm">
            <a href="#" className="text-gray-500">
              Create new account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
