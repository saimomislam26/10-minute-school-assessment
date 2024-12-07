import React from 'react';
import { Badge } from '../ui/Badge';

interface PriceTagProps {
  currentPrice: number;
  originalPrice: number;
  discount: number;
}

export function PriceTag({ currentPrice, originalPrice, discount }: PriceTagProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-2xl font-bold">৳{currentPrice}</span>
      <span className="text-gray-500 line-through">৳{originalPrice}</span>
      <Badge variant="secondary">৳{discount} ছাড়</Badge>
    </div>
  );
}