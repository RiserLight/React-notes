import { useState } from "react";
import Layout from "./Layout";

const Orders = () => {

  const [orders, setOrders] = useState([
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    },
    {
        orderId: '#rty45678',
        customerName: 'Rahul',
        email: 'example@gmail.com',
        mobile: '+91 9472395194',
        product: 'lenovo ideapad 360',
        amount: 52000,
        date: '12-10-2024 10:15:14 Am',
        status: 'pending'
    }
  ]);

  return (
    <Layout>
      <h1 style={{ fontWeight: 600, fontSize: 20 ,marginBottom:8}}>Orders</h1>
      <table style={{
        width:"100%",
        fontWeight:700,
        fontSize:16
      }}>
        <thead>
          <tr style={{color:"white", background:"#E11D47"}}>
            <th className="py-4">Order Id</th>
            <th>Customer's Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {
          orders.length>0 && orders.map((order,index)=>(
            <tr key={order.orderId} style={{
              fontWeight:400, 
              fontSize:16,
              textAlign:"center",
              background: index%2==1 ? "#F1F5F9":"white"
            }}>
            <td className="py-4">{order.orderId}</td>
            <td className="capitalize">{order.customerName}</td>
            <td>{order.email}</td>
            <td>{order.mobile}</td>
            <td className="capitalize">{order.product}</td>
            <td> ₹{order.amount.toLocaleString()}</td>
            <td>{order.date}</td>
            <td>
            <select className="border p-1 border-gray-200">
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="dispatched">Dispatched</option>
            <option value="returned">Returned</option>
            </select>
            </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </Layout>
  );
};

export default Orders;
