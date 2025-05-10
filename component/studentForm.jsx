"use client";
import { useState, useContext } from "react";
import { auth } from "@/firebase/config";
import { useTheme } from "@/app/context/ThemeContext"; // Assuming you have the ThemeContext and useTheme hook

export default function StudentForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  
  // Get current theme from ThemeContext
  const { theme } = useTheme();  // Assuming theme is 'light' or 'dark'
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.course) return alert("All fields required!");
    if (!auth.currentUser) return alert("Login required!");
    onAdd(form);
    setForm({ name: "", email: "", course: "" });
  };

  // Conditional styling based on theme
  const formStyles = theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";
  const inputStyles = theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300";
  const buttonStyles = theme === "dark" ? "bg-green-500 text-white" : "bg-green-600 text-white";

  return (
    <form onSubmit={handleSubmit} className={`p-4 shadow rounded ${formStyles}`}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className={`block mb-2 p-2 w-full border ${inputStyles}`}
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        className={`block mb-2 p-2 w-full border ${inputStyles}`}
      />
      <select
  name="course"
  value={form.course}
  onChange={handleChange}
  className={`block mb-2 p-2 w-full border ${inputStyles}`}
>
  <option value="">Select Course</option>
  <option value="B.Tech">B.Tech</option>
  <option value="BCA">BCA</option>
  <option value="MBA">MBA</option>
  <option value="BSc">BSc</option>
  <option value="BA">BA</option>
  <option value="LLB">LLB</option>
  <option value="MBBS">MBBS</option>
  <option value="CA">CA</option>
</select>
      <button type="submit" className={`px-4 py-2 rounded ${buttonStyles}`}>
        Add Student
      </button>
    </form>
  );
}
