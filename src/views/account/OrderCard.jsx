import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ order }) => {
  const {orderStatus} = order ;
    let orderproduct = [];
    let formattedDate ;
    let orderstatus ;
    console.log(order);
    if(order != {})
    {
     
      order.orderItems.forEach(orderItem => {
        orderproduct.push(orderItem);
      });
      const orderCreatedAt = new Date(order.createdAt);

      // Define an array of month names
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
      const day = orderCreatedAt.getDate(); // Get the day (1-31)
      const month = monthNames[orderCreatedAt.getMonth()]; // Get the month name
      const year = orderCreatedAt.getFullYear(); // Get the full year
      
     formattedDate = `${day} ${month} ${year}`;
     orderstatus = order.orderStatus
     

    }

   
    

    


  
  return (
    <div className="row">
    {orderproduct.map((order, index) => (
      <div className="col-md-6" key={index}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={order.image} className="img-fluid" alt="Product" />
            </div>
            <div className="col-md-8">
              <div className="card-header">
                <div className="small">
                  <span className="border bg-secondary rounded-left px-2 text-white">Order ID</span>
                  <span className="border bg-white rounded-right px-2 me-2">#{order._id}</span>
                  <span className="border bg-secondary rounded-left px-2 text-white">Date</span>
                  <span className="border bg-white rounded-right px-2">{formattedDate}</span>
                </div>
              </div>
              <div className="card-body">
                <h6>
                  <Link to={`/product/detail/${order.product}`} className="text-decoration-none">
                    {order.name}
                  </Link>
                </h6>
                <div className="small">
                  <span className="text-muted me-2">Size:</span>
                  <span className="me-3">L</span>
                  <span className="text-muted me-2">Price:</span>
                  <span className="me-3">{order.price}</span>
                  <span className="text-muted me-2">Color:</span>
                  <span className="me-3">
                    <span className={`bg-${order.color} px-1 rounded`}>&nbsp;&nbsp;&nbsp;</span>
                  </span>
                </div>
                <div className="mt-2"></div>
              </div>
              <div className="card-footer">
                <span className="me-2">Status:</span>
                <span className={`text-${orderStatus === 'Processing' ? 'primary' : 'success'}`}>{orderStatus}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default OrderCard ;