export default function ViewToggle({ view, setView }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setView('grid')}
        className={`px-3 py-1 border rounded ${view === 'grid' ? 'bg-gray-200' : ''}`}
      >
        Grid
      </button>
      <button
        onClick={() => setView('list')}
        className={`px-3 py-1 border rounded ${view === 'list' ? 'bg-gray-200' : ''}`}
      >
        List
      </button>
    </div>
  );
}
