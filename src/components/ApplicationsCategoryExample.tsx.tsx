import { DynamicCategoryPage } from "./DynamicCategoryPage";
import { Footer } from "./Footer";
import { applicationsCategory } from "@/data/category/applicationsCategory";

/**
 * Applications Category Page
 * 
 * This is an example implementation showing how to use the DynamicCategoryPage
 * component with category data. The same pattern can be used for all categories.
 * 
 * Route: /applications
 */
export function ApplicationsCategoryExample() {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle - Fixed Position */}
      {/* <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div> */}

      {/* Dynamic Category Page */}
      <DynamicCategoryPage category={applicationsCategory} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
