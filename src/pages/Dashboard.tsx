
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Dashboard de Inventario</h1>
        <Link to="/products/new" className="text-sm text-blue-600">Crear producto</Link>
      </div>

      <div className="border rounded p-4 bg-white">
        <p className="text-sm text-gray-600">Listado de productos (placeholder). Grid con pagi.</p>
        <div className="mt-4 flex gap-2">
          <button className="px-3 py-1 border rounded">Previous</button>
          <button className="px-3 py-1 border rounded">Next</button>
          <span className="ml-auto text-sm text-gray-500">Página 1 de 1</span>
        </div>
      </div>
    </div>
  );
}
