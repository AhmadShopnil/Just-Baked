export default function Filters({ selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'Clothing', 'Electronics'];

  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="border px-3 py-1 rounded"
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
