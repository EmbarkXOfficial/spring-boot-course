import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import OrderTable from './OrderTable';
import { useSelector } from 'react-redux';
import useOrderFilter from '../../../hooks/useOrderFilter';

const Orders = () => {
  // const adminOrder = [ { "orderId": 17, "email": "user1@example.com", "orderItems": [ { "orderItemId": 7, "product": { "productId": 153, "productName": "Running Shoes", "image": "0abca637-0c4e-4054-ae03-bdfc51cb3396.png", "description": "Comfortable and lightweight running shoes for daily fitness", "quantity": 49, "price": 80, "discount": 10, "specialPrice": 72 }, "quantity": 1, "discount": 10, "orderedProductPrice": 72 } ], "orderDate": "2025-02-15", "payment": { "paymentId": 17, "paymentMethod": "online", "pgPaymentId": "pi_3QsfCYLK9jOar8Y81NsK7PXG", "pgStatus": "succeeded", "pgResponseMessage": "Payment successful", "pgName": "Stripe" }, "totalAmount": 72, "orderStatus": "Order Accepted !", "addressId": 1 }, { "orderId": 18, "email": "user1@example.com", "orderItems": [ { "orderItemId": 8, "product": { "productId": 102, "productName": "Blender", "image": "39356dd0-6682-4821-adc8-b198ee85b358.png", "description": "High-performance Blender having powerful features for modern family", "quantity": 28, "price": 500, "discount": 19, "specialPrice": 405 }, "quantity": 1, "discount": 19, "orderedProductPrice": 405 } ], "orderDate": "2025-07-18", "payment": { "paymentId": 18, "paymentMethod": "online", "pgPaymentId": "pi_3Rm6zYLK9jOar8Y81iyMdnMg", "pgStatus": "succeeded", "pgResponseMessage": "Payment successful", "pgName": "Stripe" }, "totalAmount": 405, "orderStatus": "Order Accepted !", "addressId": 5 } ];
  // const pagination = { pageNumber: 0, pageSize: 50, totalElements: 11, totalPages: 1, lastPage: true };
  
  const {adminOrder, pagination} = useSelector((state) => state.order);

  useOrderFilter();

  const emptyOrder = !adminOrder || adminOrder?.length ===0;
  return (
    <div className='pb-6 pt-20'>
        {emptyOrder ? (
            <div className='flex flex-col items-center justify-center text-gray-600 py-10'>
                <FaShoppingCart size={50} className='mb-3'/>
                <h2 className='text-2xl font-semibold'>No Orders Placed Yet</h2>
            </div>
        ) : (
           <OrderTable adminOrder={adminOrder} pagination={pagination}/>
        )}
    </div>
  )
}

export default Orders