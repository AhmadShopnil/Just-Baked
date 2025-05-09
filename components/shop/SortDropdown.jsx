export default function SortDropdown({ sortOrder, setSortOrder }) {
  return (
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="border px-3 py-1 rounded"
    >
      <option value="low-to-high">Price: Low to High</option>
      <option value="high-to-low">Price: High to Low</option>
    </select>
  );
}
