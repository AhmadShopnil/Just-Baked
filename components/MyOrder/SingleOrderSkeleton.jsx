export default function SingleOrderSkeleton() {
  return (
    <div className="min-h-screen py-6 px-4 md:px-10 max-w-7xl mx-auto space-y-6">
      {/* Header Skeleton */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gray-200 animate-pulse" />
        <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse" />
        <div className="ml-auto w-40 h-10 bg-blue-600 rounded-lg animate-pulse" />
      </div>

      {/* Grid Layout Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Order Summary Skeleton */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white  rounded-xl shadow-sm">
            <div className="p-6 -b">
              <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2">
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                    </th>
                    <th className="px-4 py-2">
                      <div className="h-4 w-12 bg-gray-200 rounded animate-pulse mx-auto" />
                    </th>
                    <th className="px-4 py-2">
                      <div className="h-4 w-8 bg-gray-200 rounded animate-pulse mx-auto" />
                    </th>
                    <th className="px-4 py-2 text-right">
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse ml-auto" />
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {[...Array(3)].map((_, i) => (
                    <tr key={i}>
                      <td className="flex items-center gap-4 px-4 py-3">
                        <div className="w-12 h-12 bg-gray-200 rounded  animate-pulse" />
                        <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
                      </td>
                      <td className="text-center">
                        <div className="h-5 w-16 bg-gray-200 rounded animate-pulse mx-auto" />
                      </td>
                      <td className="text-center">
                        <div className="h-5 w-10 bg-gray-200 rounded animate-pulse mx-auto" />
                      </td>
                      <td className="text-right">
                        <div className="h-5 w-20 bg-gray-200 rounded animate-pulse ml-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={3} className="text-right px-4 py-2">
                      <div className="h-5 w-28 bg-gray-200 rounded animate-pulse ml-auto" />
                    </td>
                    <td className="text-right px-4 py-2">
                      <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="text-right px-4 py-2">
                      <div className="h-6 w-32 bg-gray-200 rounded animate-pulse ml-auto" />
                    </td>
                    <td className="text-right px-4 py-2">
                      <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Shipping and Payment Info Skeleton */}
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white  rounded-xl shadow-sm p-6">
              <div className=" pb-4 mb-4">
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="space-y-2">
                {[...Array(4)].map((__, j) => (
                  <div key={j} className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
