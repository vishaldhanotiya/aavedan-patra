import { DynamicCategoryPage } from "./DynamicCategoryPage";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { certificatesCategory } from "../data/categoryData";

/**
 * Certificates Category Page
 * 
 * This is an example implementation showing how to use the DynamicCategoryPage
 * component with certificates category data.
 * 
 * Route: /certificates
 */
export function CertificatesCategoryExample() {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Dynamic Category Page */}
      <DynamicCategoryPage category={certificatesCategory} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
