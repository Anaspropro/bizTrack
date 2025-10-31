import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export interface InventoryItem {
  id: number;
  name: string;
  sku: string;
  cost_price: number;
  selling_price: number;
  quantity: number;
  category?: string;
  storeId: number;
  createdAt: string;
  updatedAt: string;
}

const InventoryList: React.FC = () => {
  const [data, setData] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE}/inventory`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message || 'Failed to fetch data'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="py-4">Loading inventory...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!data.length) return <div className="text-gray-600">No inventory found.</div>;

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-700">Name</th>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-700">SKU</th>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-700">Cost Price</th>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-700">Selling Price</th>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-700">Quantity</th>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-700">Category</th>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-700">Store</th>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-700">Created</th>
            <th className="px-4 py-2 text-left text-xs font-bold text-gray-700">Updated</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 whitespace-nowrap">{item.name}</td>
              <td className="px-4 py-2 whitespace-nowrap">{item.sku}</td>
              <td className="px-4 py-2 whitespace-nowrap">₦{item.cost_price}</td>
              <td className="px-4 py-2 whitespace-nowrap">₦{item.selling_price}</td>
              <td className="px-4 py-2 whitespace-nowrap">{item.quantity}</td>
              <td className="px-4 py-2 whitespace-nowrap">{item.category}</td>
              <td className="px-4 py-2 whitespace-nowrap">{item.storeId}</td>
              <td className="px-4 py-2 whitespace-nowrap">{new Date(item.createdAt).toLocaleString()}</td>
              <td className="px-4 py-2 whitespace-nowrap">{new Date(item.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
