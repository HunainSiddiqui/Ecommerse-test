import React from 'react';
import { Link } from 'react-router-dom';
import { useOrder } from '../../contex/Orderconntex';

const OrderCard = ({ order }) => {
  const { orderStatus } = order;
  let orderProducts = [];
  let formattedDate;
  console.log(order);

  if (order) {
    order.orderItems.forEach((orderItem) => {
      orderProducts.push(orderItem);
    });
    const orderCreatedAt = new Date(order.createdAt);

    // Define an array of month names
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const day = orderCreatedAt.getDate(); // Get the day (1-31)
    const month = monthNames[orderCreatedAt.getMonth()]; // Get the month name
    const year = orderCreatedAt.getFullYear(); // Get the full year

    formattedDate = `${day} ${month} ${year}`;
  }

  console.log(orderProducts);

  return (
    <div className="card " style={{borderBlockColor:"#8597ff"}}>
      <div className="card-header" style={{background:"#8597ff"}}>
        <div className="small">
          <span className="border bg-secondary rounded-left px-2 text-white">Order ID</span>
          <span className="border bg-white rounded-right px-2 me-2">#{order._id}</span>
          <span className="border bg-secondary rounded-left px-2 text-white">Date</span>
          <span className="border bg-white rounded-right px-2">{formattedDate}</span>
        </div>
      </div>
      <div className="card-body">
        {orderProducts.map((product, index) => (
         <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
         <div>
           <h6>
             <Link to={`/product/detail/${product.product}`} className="text-decoration-none">
               {product.name}
             </Link>
           </h6>
           <div className="small">
             <span className="text-muted me-2">Size:</span>
             <span className="me-3">L</span>
             <span className="text-muted me-2">Price:</span>
             <span className="me-3">{product.price}</span>
             <span className="text-muted me-2">Color:</span>
             <span className="me-3">
               <span className={`bg-${product.color} px-1 rounded`}>&nbsp;&nbsp;&nbsp;</span>
             </span>
           </div>
           <div className="mt-2"></div>
         </div>
         <img
           src={product.image}
           style={{ height: '200px', objectFit: 'cover', marginLeft: '20px' }}
           alt={product.name}
           className="img-fluid"
         />
       </div>
        ))}
      </div>
      <div className="card-footer">
        <span className="me-2">Status:</span>
        <span className={`text-${orderStatus === 'Processing' ? 'primary' : 'success'}`}>{orderStatus}</span>
      </div>
    </div>
  );
};

export default OrderCard;
