"use client";
import { useTheme } from "@/app/context/ThemeContext"; 

export default function Filter({ onFilter }) {
  const { theme } = useTheme();

  const selectStyles =
    theme === "dark"
      ? "bg-gray-800 text-white border-gray-700"
      : "bg-white text-black border-gray-300";

  return (
    <select
      onChange={(e) => onFilter(e.target.value)}
      className={`w-full px-4 py-2 border rounded-md focus:outline-none ${selectStyles}`}
    >
      <option value="">All Courses</option>
      <option value="B.Tech">B.Tech</option>
      <option value="BCA">BCA</option>
      <option value="MBA">MBA</option>
      <option value="BSc">BSc</option>
      <option value="BA">BA</option>
      <option value="LLB">LLB</option>
      <option value="MBBS">MBBS</option>
      <option value="CA">CA</option>
    </select>
  );
}
