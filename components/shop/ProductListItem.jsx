export default function ProductListItem({ product }) {
  return (
    <div className="flex gap-4 border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-24 h-24 object-cover" />
      <div>
        <h2 className="font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-blue-600 font-bold">${product.price}</p>
      </div>
    </div>
  );
}
