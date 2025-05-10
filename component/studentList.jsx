"use client";
import { useContext } from "react";
import { useTheme } from "@/app/context/ThemeContext"; 

export default function StudentList({ students }) {

  const { theme } = useTheme(); 
  
  // Conditional styling based on theme
  const containerStyles = theme === "dark" 
    ? "bg-gray-800 text-white" 
    : "bg-white text-black";
  const cardStyles = theme === "dark" 
    ? "bg-gray-700 border-gray-600 shadow-md"
    : "bg-white border-gray-200 shadow-md";
  const textStyles = theme === "dark" 
    ? "text-gray-100"
    : "text-gray-700";
  const courseTextStyles = theme === "dark" 
    ? "text-gray-300"
    : "text-gray-600";

  return (
    <div className={`space-y-4 ${containerStyles}`}>
      {students.map((student, index) => (
        <div
          key={index}
          className={`rounded-xl p-4 border ${cardStyles}`}
        >
          <h2 className={`text-xl font-semibold ${textStyles}`}>{student.name}</h2>
          <p className={`text-base ${textStyles}`}>Email: {student.email}</p>
          <p className={`text-base ${courseTextStyles}`}>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}
