"use client";

import { setCookie, deleteCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdOutlineEmail, MdCalendarMonth } from "react-icons/md";
import logoJayaRaya from "../../../public/images/logo-jaya-raya.png";
import logoDprkp from "../../../public/images/logo-dprkp-back-putih.png";

export default function LoginPage() {
  //when login remove data token dan user id
  deleteCookie("token");
  deleteCookie("u_id");

  const router = useRouter();

  const [statusForm, setStatusForm] = useState("login");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");

  const [isLoading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Handle login logic here
    try {
      setLoading(true);
      const formData = {
        username,
        password,
      };

      fetch("/api/web/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credential": "true",
        },
        body: JSON.stringify(formData),
      }).then(async (response) => {
        if (
          response.ok &&
          (response.status === 200 || response.status === 201)
        ) {
          const result = await response.json();
          setCookie("token", result?.token);
          authUser(result?.token);
        } else {
          setLoading(false);
          console.error("Error login:", response);
          throw await response;
        }
      });
    } catch (error) {
      //need pop up error login
      setLoading(false);
      throw error;
    }
  };

  async function authUser(token) {
    try {
      fetch("/api/web/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then(async (response) => {
        if (
          response.ok &&
          (response.status === 200 || response.status === 201)
        ) {
          setLoading(false);
          const result = await response.json();
          setCookie("u_id", result?._id);
          router.push("/page");
        } else {
          //need pop up error login
          setLoading(false);
          console.error("Error login:", response);
          throw await response;
        }
      });
    } catch (error) {
      console.error("Error login:", error);
    }
  }

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusForm("login");
  };

  return (
    <div className="h-screen flex">
      {/* Kiri (Gradient background) */}
      <div className="w-1/2 bg-[#104c61] text-white flex flex-col justify-center items-center p-10 rounded-r-[80px]">
        <div className="flex">
          <Image
            id="img-logo-raya-dki"
            src={logoJayaRaya}
            alt="Logo Jaya Raya DKI Jakarta"
            width={50}
            height={50}
          />
          <Image
            id="img-logo-dprkp-dki"
            src={logoDprkp}
            alt="Logo DPRKP DKI Jakarta"
            width={50}
            height={50}
          />

          <h1 className="text-4xl font-bold ml-2">DPRKP</h1>
        </div>
        <p className="text-center max-w-sm">
          Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi DKI Jakarta
        </p>
      </div>

      {/* Kanan (Form login) */}
      <div className="w-1/2 flex flex-col justify-center items-center px-10">
        <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
          <div className="flex justify-center mb-2">
            <div className="bg-[#f98025] rounded-full p-4">
              <FaUser className="text-white text-2xl" />
            </div>
          </div>
          <div className="text-center text-sm mb-4">
            <span className="text-gray-500">Masuk ke Akun Anda</span>
          </div>
          <form
            id="form-login"
            onSubmit={
              statusForm === "login" ? handleLogin : handleResetPassword
            }
            className="space-y-4"
          >
            <div className="relative">
              {statusForm === "login" ? (
                <>
                  <FaUser className="absolute top-3 left-3 text-gray-400" />
                  <input
                    id="form-input-username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2"
                  />
                </>
              ) : (
                <>
                  <MdCalendarMonth className="absolute top-3 left-3 text-gray-400" />
                  <input
                    id="form-input-date"
                    type="date"
                    placeholder="Tanggal Lahir"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2"
                  />
                </>
              )}
            </div>
            <div className="relative">
              {statusForm === "login" ? (
                <>
                  <FaLock className="absolute top-3 left-3 text-gray-400" />
                  <input
                    id="form-input-password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2"
                  />
                </>
              ) : (
                <>
                  <MdOutlineEmail className="absolute top-3 left-3 text-gray-400" />
                  <input
                    id="form-input-email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2"
                  />
                </>
              )}
            </div>

            {statusForm === "login" ? (
              <>
                <div className="text-right text-sm text-gray-500">
                  <a
                    id="reset-password"
                    href="#"
                    onClick={() => setStatusForm("resetPassword")}
                  >
                    Lupa password
                  </a>
                </div>

                {isLoading ? (
                  <div className="flex">
                    <button
                      id="btn-loading"
                      disabled
                      type="button"
                      className="w-full bg-[#f98025] text-white py-2 rounded transition"
                    >
                      Loading…
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      id="btn-login"
                      type="submit"
                      className="w-full bg-[#f98025] text-white py-2 rounded transition disabled:bg-[#F69000]"
                      disabled={username === "" || password === ""}
                    >
                      Masuk
                    </button>
                  </>
                )}
              </>
            ) : (
              <button
                id="btn-reset-password"
                type="submit"
                className="w-full bg-[#376F04] text-white py-2 rounded transition"
              >
                Reset Password
              </button>
            )}
          </form>

          <div className="text-center mt-4 text-sm">
            <a href="#" className="text-gray-500">
              Daftar Akun Baru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
