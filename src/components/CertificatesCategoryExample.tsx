import { certificatesCategory } from "@/data/category/certificatesCategory";
import { DynamicCategoryPage } from "./DynamicCategoryPage";
import { Footer } from "./Footer";

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

      {/* Dynamic Category Page */}
      <DynamicCategoryPage category={certificatesCategory} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
