import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Detalle del producto</h1>
      <div className="border rounded p-4 bg-white">
        <p className="text-sm text-gray-600">Detalle para producto con id: {id} (placeholder).</p>
      </div>
    </div>
  );
}
