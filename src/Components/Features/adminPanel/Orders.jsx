import  { useState, useMemo } from 'react';
import { products } from './ProductTable/products';
import TableHeader  from './ProductTable/TableHeader';
import { TableRow } from './ProductTable/TableRow';

export default function Orders() {
    const [searchTerm, setSearchTerm] = useState('');
    const [timeFilter, setTimeFilter] = useState('Last 30 days');
    const [selectedProducts, setSelectedProducts] = useState(new Set());

    // Filter products based on search term
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const searchString = `${product.name} ${product.color} ${product.category} ${product.price}`
                .toLowerCase();
            return searchString.includes(searchTerm.toLowerCase());
        });
    }, [searchTerm]);

    // Handle checkbox selection
    const toggleProductSelection = (productName) => {
        const newSelected = new Set(selectedProducts);
        if (newSelected.has(productName)) {
            newSelected.delete(productName);
        } else {
            newSelected.add(productName);
        }
        setSelectedProducts(newSelected);
    };

    // Handle select all
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedProducts(new Set(filteredProducts.map(p => p.name)));
        } else {
            setSelectedProducts(new Set());
        }
    };

    // Handle time filter change
    const handleTimeFilterChange = () => {
        setTimeFilter(timeFilter === 'Last 30 days' ? 'Last 7 days' : 'Last 30 days');
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
                <TableHeader
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    timeFilter={timeFilter}
                    onTimeFilterChange={handleTimeFilterChange}
                />
                
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <th className="pl-4 py-3 w-[40px]">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300"
                                        checked={selectedProducts.size === filteredProducts.length && filteredProducts.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="py-3">User Name</th>
                                <th className="pl-4 py-3">Product Name</th>
                                <th className="py-3">Address</th>
                                <th className="py-3">Order date</th>
                                <th className="py-3">Price</th>
                                <th className="py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((product) => (
                                <TableRow
                                    key={product.name}
                                    product={product}
                                    isSelected={selectedProducts.has(product.name)}
                                    onSelect={toggleProductSelection}
                                />
                            ))}
                            {filteredProducts.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="py-8 text-center text-gray-500">
                                        No products found matching your search criteria
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
