"use client";
import { useTheme } from "@/app/context/ThemeContext"; // Adjust if the path differs
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      router.push("/login");
    });
  };

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 shadow-md ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-xl font-bold">Student-Dashboard</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className={`px-3 py-1 text-sm rounded ${
            theme === "light"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-yellow-500 text-black hover:bg-yellow-600"
          }`}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

        {user && (
          <div className="flex flex-col items-end text-sm">
            <span className="font-medium">{user.displayName || user.email}</span>
            <button
              onClick={handleLogout}
              className="mt-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
