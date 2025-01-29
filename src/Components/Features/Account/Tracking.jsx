// src/App.js
import Sidebar from './Sidebar';
import {Button} from "@nextui-org/button";
import React, { useState } from 'react';

const App = () => {
  // Sample data for orders
  const [orders, setOrders] = useState([
    { id: 1, productName: 'Laptop', status: 'Shipped', trackingNumber: '123456789' },
    { id: 2, productName: 'Smartphone', status: 'Processing', trackingNumber: null },
    { id: 3, productName: 'Headphones', status: 'Delivered', trackingNumber: '987654321' },
  ]);

  // Cancel an order
  const cancelOrder = (orderId) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: 'Cancelled' } : order
      )
    );
  };

  return (
    <div className="w-full h-auto bg-[#F6F6F6] overflow-hidden">
      <h1 className="font-medium text-xl md:text-3xl p-4 text-center md:text-left">Account Setting</h1>
      <div className="bg-white mx-2 md:mx-5 my-2 w-[98%] h-auto md:h-[90%] flex flex-col md:flex-row">
        <Sidebar />
        <div className="min-h-screen w-full bg-gray-100 p-6">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Order Tracking</h1>

          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center"
              >
                <div className="space-y-1">
                  <Button variant='plain' className="">
                    <h2 className="text-xl font-semibold text-gray-800">{order.productName}</h2>
                  </Button>
                  
                  <p className="text-gray-600 px-4">Status: {order.status}</p>
                  {order.trackingNumber && (
                    <p className="text-gray-600 px-4">Tracking Number: {order.trackingNumber}</p>
                  )}
                </div>

                <button
                  onClick={() => cancelOrder(order.id)}
                  disabled={order.status === 'Cancelled'}
                  className={`ml-6 px-6 py-2 text-white rounded-lg ${order.status === 'Cancelled'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-red-500 hover:bg-red-600'
                    }`}
                >
                  {order.status === 'Cancelled' ? 'Order Cancelled' : 'Cancel Order'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;
