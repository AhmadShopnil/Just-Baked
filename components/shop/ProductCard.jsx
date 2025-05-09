export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="mt-2 font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-blue-600 font-bold">${product.price}</p>
    </div>
  );
}
