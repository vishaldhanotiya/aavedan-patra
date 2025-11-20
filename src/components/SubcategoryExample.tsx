'use client'
import { useState } from "react";
import { SubcategoryListingPage } from "./SubcategoryListingPage";
import { getSubcategoryData } from "../data/subcategoryData";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { useParams } from "next/navigation";

export function SubcategoryExample() {
    const params = useParams();

      console.log("SubcategoryExample===",params.type)
      const type=params.type
  // Simulate URL routing - in production this would come from router params
  // Options: 'job', 'leave', 'loan', 'admission', 'scholarship'
  const [currentSubcategory, setCurrentSubcategory] = useState<string>(type || "job");

  const subcategoryData = getSubcategoryData(currentSubcategory);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <ThemeToggle />
      
      {/* Demo Navigation - Remove in production */}
      {/* <div className="fixed top-4 left-4 z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-lg">
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Demo: Switch Category</p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setCurrentSubcategory("job")}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              currentSubcategory === "job"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            Job Apps
          </button>
          <button
            onClick={() => setCurrentSubcategory("leave")}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              currentSubcategory === "leave"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            Leave Apps
          </button>
          <button
            onClick={() => setCurrentSubcategory("loan")}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              currentSubcategory === "loan"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            Loan Apps
          </button>
          <button
            onClick={() => setCurrentSubcategory("admission")}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              currentSubcategory === "admission"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            Admission Apps
          </button>
          <button
            onClick={() => setCurrentSubcategory("scholarship")}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              currentSubcategory === "scholarship"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            Scholarship Apps
          </button>
        </div>
      </div> */}

      <SubcategoryListingPage data={subcategoryData} />
      <Footer />
    </div>
  );
}
