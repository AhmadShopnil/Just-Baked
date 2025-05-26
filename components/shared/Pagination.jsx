import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = generatePageNumbers(currentPage, totalPages);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex justify-center items-center gap-1 mt-6">
      {/* Previous Button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={isFirstPage}
        className={`p-2 rounded ${
          isFirstPage ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && goToPage(page)}
          disabled={typeof page !== "number"}
          className={`px-3 py-1.5 rounded text-sm ${
            page === currentPage
              ? "bg-[#724b00] text-white"
              : typeof page === "number"
              ? "hover:bg-gray-100"
              : "text-gray-500 cursor-default"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={isLastPage}
        className={`p-2 rounded ${
          isLastPage ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// Utility to generate page numbers with ellipses
function generatePageNumbers(current, total) {
  const pages = [];
  const delta = 2;

  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  pages.push(1);

  if (left > 2) pages.push("...");

  for (let i = left; i <= right; i++) {
    pages.push(i);
  }

  if (right < total - 1) pages.push("...");
  if (total > 1) pages.push(total);

  return pages;
}
