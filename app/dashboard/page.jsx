"use client";
import { useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import axios from "axios";
import "@/lib/mockApi";

import StudentList from "@/component/studentList";
import StudentForm from "@/component/studentForm";
import Filter from "@/component/filter";
import Navbar from "@/component/Navbar";
import { useTheme } from "../context/ThemeContext";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [courseFilter, setCourseFilter] = useState("");
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/login");
    } else {
      axios.get("/api/students").then((res) => {
        setStudents(res.data);
        setFiltered(res.data);
        setLoading(false);
      });
    }
  }, []);

  const handleAdd = (student) => {
    axios.post("/api/students", student).then(() => {
      setStudents((prev) => [...prev, student]);
      setFiltered((prev) => [...prev, student]);
    });
  };

  const handleFilter = (course) => {
    setCourseFilter(course);
    if (course === "") setFiltered(students);
    else setFiltered(students.filter((s) => s.course === course));
  };

  const containerBg =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-white";

  return (
    <>
      <Navbar />
      <div className={`min-h-screen ${containerBg} py-10 px-4`}>
        <div className="max-w-6xl mx-auto space-y-6">
          {loading ? (
            <p className="text-center mt-10 text-gray-700 dark:text-gray-300">
              Loading...
            </p>
          ) : (
            <>
             
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Add Student */}
                <div
                  className={`lg:w-1/3 w-full shadow-lg rounded-xl p-6 ${cardBg}`}
                >
                  <h2 className="text-2xl font-semibold mb-4">
                    Add New Student
                  </h2>
                  <StudentForm onAdd={handleAdd} />
                </div>

                {/* Filter + Student List */}
                <div
                  className={`lg:w-2/3 w-full shadow-lg rounded-xl p-6 space-y-6 ${cardBg}`}
                >
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Filter by Course
                    </h2>
                    <Filter onFilter={handleFilter} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">
                      Student List
                    </h2>
                    <StudentList students={filtered} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
