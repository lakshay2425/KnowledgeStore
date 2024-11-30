import React from 'react';
import { Search } from 'lucide-react';

interface TableHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  timeFilter: string;
  onTimeFilterChange: () => void;
}

export function TableHeader({ searchTerm, onSearchChange, timeFilter, onTimeFilterChange }: TableHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <button 
        onClick={onTimeFilterChange}
        className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        {timeFilter}
      </button>
      <div className="relative">
        <input
          type="text"
          placeholder="Search for items"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-2 w-[300px] text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
}