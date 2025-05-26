export default function ProductSkeleton({ view = "grid" }) {
  if (view === "list") {
    return (
      <div className="flex gap-4 p-4 border border-gray-200 rounded shadow-sm animate-pulse">
        <div className="w-24 h-24 bg-gray-200 rounded-md" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-1/2 bg-gray-200 rounded" />
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 p-4 rounded shadow-sm animate-pulse">
      <div className="h-40 bg-gray-200 rounded mb-4" />
      <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />
      <div className="h-4 w-1/2 bg-gray-200 rounded" />
    </div>
  );
}
