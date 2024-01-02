import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as IconHeartFill } from 'bootstrap-icons/icons/heart-fill.svg';
import { ReactComponent as IconTrash } from 'bootstrap-icons/icons/trash.svg';
import { ReactComponent as IconChevronRight } from 'bootstrap-icons/icons/chevron-right.svg';
import { ReactComponent as IconChevronLeft } from 'bootstrap-icons/icons/chevron-left.svg';
import { ReactComponent as IconTruck } from 'bootstrap-icons/icons/truck.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import CouponApplyForm from '../../components/others/CouponApplyForm';
import { useCart } from '../../contex/Cartcontex';

function CartView() {
  const [cartItems, setCartItems] = useState([]);
  const [couponApplied, setCouponApplied] = useState(false  );
  const { state, dispatch, totalprice, settotalprice } = useCart();

  const handleQuantityChange = (product, newQuantity) => {
    if (newQuantity >= 0) {
      // Dispatch an action to update the quantity in the context
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { productId: product._id, newQuantity },
      });

     
    }
  };

  
  
  const removeItem = (item) => {
    console.log(item);
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const onSubmitApplyCouponCode = (values) => {
    // setCouponApplied = "Extra10"
    alert(JSON.stringify(values));
    // You can handle the coupon code submission here
    // Update state, make API requests, etc.
    // For example, setCouponApplied(true);
  };

  useEffect(() => {
    let p = 0;
    state.items.forEach((pro) => {
      p += pro.price * pro.quantity;
    });
    
    // Dispatch an action to update the total price
    settotalprice({ type: 'SET_TOTAL_PRICE', payload: p });
  }, [state.items, settotalprice]);

  return (
    <React.Fragment>
      <div className=" border-top p-4 text-white mb-3" style={{background:"#8597ff"}}>
        <h1 className="display-6">Shopping Cart</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width={120}>
                        Quantity
                      </th>
                      <th scope="col" width={150}>
                        Price
                      </th>
                      <th scope="col" className="text-end" width={130}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.items.map((product) => (
                      <tr key={product._id}>
                        <td>
                          <div className="row">
                            <div className="col-3 d-none d-md-block">
                              <img
                                src={product.images[0].url}
                                width="80"
                                alt={product.name}
                              />
                            </div>
                            <div className="col">
                              <Link
                                to="/product/detail"
                                className="text-decoration-none"
                              >
                                {product.name}
                              </Link>
                              <p className="small text-muted">
                                {/* Size: {product.size}, Color: {product.color}, Brand: {product.brand} */}
                                Size: "L", Color: "Red", Brand: "HTG"
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="input-group input-group-sm mw-140">
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                              onClick={() => {
                                if (product.quantity > 1) {
                                  handleQuantityChange(product, product.quantity - 1);
                                }
                              }}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input
                              type="text"
                              className="form-control"
                              value = {product.quantity}
                              defaultValue = {product.quantity}
                            />
                            
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                              onClick={() => {
                                handleQuantityChange(product, product.quantity + 1);
                              }}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </td>
                        <td>
                          <var className="price">
                            ${product.price.toFixed(2)  * product.quantity}
                          </var>
                          <small className="d-block text-muted">
                          ${product.price.toFixed(2)} each
                          </small>
                        </td>
                        <td className="text-end">
                          <button className="btn btn-sm btn-outline-secondary me-2">
                            <IconHeartFill className="i-va" />
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeItem(product)}
                          >
                            <IconTrash className="i-va" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <Link to="/checkout" className="btn btn-primary float-end">
                  Make Purchase <IconChevronRight className="i-va" />
                </Link>
                <Link to="/" className="btn btn-secondary">
                  <IconChevronLeft className="i-va" /> Continue shopping
                </Link>
              </div>
            </div>
            <div className="alert alert-success mt-3">
              <p className="m-0">
                <IconTruck className="i-va me-2" /> Free Delivery within 1-2
                weeks
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3">
              <div className="card-body">
                <CouponApplyForm onSubmit={onSubmitApplyCouponCode} />
              </div>
              <dt className="col-10 text-success">
                &nbsp;&nbsp; &nbsp;Extra10 applied successfully✅{" "}
              </dt>
            </div>
            <div className="card">
              <div className="card-body">
                <dl className="row border-bottom">
                  <dt className="col-6">Total price:</dt>
                  <dd className="col-6 text-end">$ {totalprice}</dd>

                  <dt className="col-6 text-success">Discount:</dt>
                  <dd className="col-6 text-success text-end">-$10</dd>
                  <dt className="col-6 text-success">
                    Coupon: <span className="small text-muted">EXTRA10</span>
                  </dt>
                  <dd className="col-6 text-success text-end">-$5</dd>
                </dl>
                <dl className="row">
                  <dt className="col-6">Total:</dt>
                  <dd className="col-6 text-end h5">
                    <strong>${totalprice<20?0:totalprice-15}</strong>
                  </dd>
                </dl>
                <hr />
                <p className="text-center">
                  <img
                    src="../../images/payment/payments.webp"
                    alt="..."
                    height={26}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-top p-4" style={{background:"#8597ff"}}>
        <div className="container">
          <h6>Payment and refund policy</h6>
          <p>{/* ... Payment and refund policy content */}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartView;
