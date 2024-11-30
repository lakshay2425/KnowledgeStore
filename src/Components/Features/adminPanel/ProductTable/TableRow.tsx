import React from 'react';
import { Product } from '../../types/product';

interface TableRowProps {
  product: Product;
  isSelected: boolean;
  onSelect: (productName: string) => void;
}

export function TableRow({ product, isSelected, onSelect }: TableRowProps) {
  return (
    <tr className="border-t border-gray-100 hover:bg-gray-50">
      <td className="py-4 pl-4">
        <input
          type="checkbox"
          className="rounded border-gray-300"
          checked={isSelected}
          onChange={() => onSelect(product.name)}
        />
      </td>
      <td className="py-4 pl-4">{product.username}</td>
      <td className="py-4 pl-4">
        <span className="font-medium text-gray-900">{product.name}</span>
      </td>
      <td className="py-4">{product.address}</td>
      <td className="py-4">{product.date}</td>
      <td className="py-4">₹ {product.price}</td>
      <td className="py-4">
        <button className="text-blue-600 hover:text-blue-800">Edit</button>
      </td>
    </tr>
  );
}