import React, { Component, useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useCart } from '../../contex/Cartcontex';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


function CheckoutView() { 
  const { state, dispatch,totalprice, settotalprice } = useCart();
  const navigate = useNavigate();
  console.log(state.items);

  const orderItems = state.items.map((pro) => {
    // Assuming 'pro' is an item in state.items
    const orderItem = {
      name: pro.name,        // Replace 'name' with the actual property in 'pro' that represents the name.
      quantity: 1,  // Replace 'quantity' with the actual property in 'pro' that represents the quantity.
      image: pro.images[0].url,      // Replace 'image' with the actual property in 'pro' that represents the image.
      price: pro.price,      // Replace 'price' with the actual property in 'pro' that represents the price.
      product: pro._id  // Replace 'product' with the actual property in 'pro' that represents the product.
    };
  
    return orderItem;
  });
 
  
  const handleSubmit = async(values) => {
    
      const formdata = {
        
        shippingInfo: {
          address: values.shippingAddress,
          city: values.shippingState,
          phoneNo: values.mobile,
          pinCode: values.shippingZip,
          state: values.shippingState,
          country: values.shippingCountry
        },
        paymentInfo: {
          id: "string",
          status:"string"
        },
        taxAmount: 0,
        shippingAmount: totalprice,
        totalPrice: totalprice-15,
        
        orderItems: orderItems
      
    };

    console.log(formdata);
          try {
            const res = await axios.post(
              "https://ecommersebackend1.onrender.com/api/v1/order/new",
              formdata,
              {
                withCredentials: true,
                crossDomain: true,
              }
            );
            if (res.status === 201) {
              toast.success('🦄 Order Placed Successfully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
              
            }
            
            
            navigate('/account/orders');
           
            
          } catch (error) {
            console.log(values);
            console.log(error);
          }

            
   
  };
  useEffect(() => {
    let p = 0;
    state.items.forEach((pro) => {
      p += pro.price * pro.quantity;
    });
    
    // Dispatch an action to update the total price
    settotalprice({ type: 'SET_TOTAL_PRICE', payload: p });
  }, [state.items, settotalprice]);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    mobile: Yup.string().required("Mobile number is required"),
    shippingName: Yup.string().required("Name is required"),
    shippingAddress: Yup.string().required("Shipping address is required"),
    shippingCountry: Yup.string().required("Country is required"),
    shippingState: Yup.string().required("State is required"),
    shippingZip: Yup.string().required("Zip code is required"),
    paymentMethod: Yup.string().required("Payment method is required"),
    cardName: Yup.string().required("Name on card is required"),
    cardNumber: Yup.string()
      .matches(/^[0-9]{16}$/, "Invalid card number")
      .required("Card number is required"),
      cardExpirationMonth: Yup.string()
      .matches(/^[0-9]{1,2}$/, "Invalid month")
      .required("Expiration month is required"),
  
    cardExpirationYear: Yup.string()
      .matches(/^[0-9]{1,4}$/, "Invalid year")
      .required("Expiration year is required"),
  
    cardCVV: Yup.string()
      .matches(/^[0-9]{3}$/, "Invalid CVV")
      .required("CVV is required"),
  });

  return (
    <React.Fragment>
      <div className=" border-top p-4 text-white mb-3" style={{background:"#8597ff"}}>
        <h1 className="display-6">Checkout</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          <Formik
            initialValues={{
              email: "",
              mobile: "",
              shippingName: "",
              shippingAddress: "",
              shippingAddress2: "",
              shippingCountry: "",
              shippingState: "",
              shippingZip: "",
              billingName: "",
              billingAddress: "",
              billingAddress2: "",
              billingCountry: "",
              billingState: "",
              billingZip: "",
              paymentMethod: "credit", // Default to credit card
              cardName: "",
              cardNumber: "",
              cardExpirationMonth: "",
              cardExpirationYear: "",
              cardCVV: "" 
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="form-group">
                <label>Email Address</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <label>Mobile no</label>
                <Field type="tel" name="mobile" className="form-control" />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-danger"
                />
              </div>
              <br />
              <div className="card mb-3">
                <div className="card-header"  style={{background:"#8597ff"}}>
                  <IconTruck className="i-va" /> Shipping Information
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Name</label>
                        <Field
                          type="text"
                          name="shippingName"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="shippingName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Address</label>
                        <Field
                          type="text"
                          name="shippingAddress"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="shippingAddress"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Address 2 (Optional)</label>
                        <Field
                          type="text"
                          name="shippingAddress2"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="shippingAddress2"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Country</label>
                        <Field
                          as="select"
                          name="shippingCountry"
                          className="form-select"
                        >
                          <option value="">-- Country --</option>
                          <option value="India">India</option>
                        </Field>
                        <ErrorMessage
                          name="shippingCountry"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>State</label>
                        <Field
                          as="select"
                          name="shippingState"
                          className="form-select"
                        >
                          <option value="">-- State --</option>
                          <option value="State is managed later">
                            Maharastra
                          </option>
                        </Field>
                        <ErrorMessage
                          name="shippingState"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Zip</label>
                        <Field
                          type="text"
                          name="shippingZip"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="shippingZip"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="card mb-3 ">
                <div className="card-header "  style={{background:"#8597ff"}}>
                  <IconCreditCard2Front className="i-va" /> Payment Method
                </div>
                <div className="card-body">
                  <div className="row g-3 mb-3 border-bottom">
                    <div className="col-md-6">
                      <div className="form-check">
                        <Field
                          type="radio"
                          name="paymentMethod"
                          value="credit"
                          className="form-check-input"
                          id="credit"
                        />
                        <label className="form-check-label" htmlFor="credit">
                          Credit card
                          <img
                            src="../../images/payment/cards.webp"
                            alt="..."
                            className="ms-3"
                            height={26}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check">
                        <Field
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          className="form-check-input"
                          id="paypal"
                        />
                        <label className="form-check-label" htmlFor="paypal">
                          PayPal
                          <img
                            src="../../images/payment/paypal_64.webp"
                            alt="..."
                            className="ms-3"
                            height={26}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Name on card</label>
                        <Field
                          type="text"
                          name="cardName"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="cardName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Card number</label>
                        <Field
                          type="number"
                          name="cardNumber"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="cardNumber"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Expiration month</label>
                        <Field
                          type="number"
                          name="cardExpirationMonth"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="cardExpirationMonth"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Expiration year</label>
                        <Field
                          type="number"
                          name="cardExpirationYear"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="cardExpirationYear"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>CVV</label>
                        <Field
                          type="number"
                          name="cardCVV"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="cardCVV"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-info d-grid">
                  <button type="submit" className="btn "  style={{background:"#8597ff"}}>
                    Pay Now <strong>${totalprice-15} </strong>
                  </button>
                </div>
              </div>
            </Form>
          </Formik>

          <div className="col-md-6">
            <div className="card" >
              <div className="card-header" style={{background:"#8597ff"}}>
                <IconCart3 className="i-va" /> Cart{" "}
                <span className="badge bg-secondary float-end">3</span>
              </div>
              <ul className="list-group list-group-flush">
              {state.items.map((product, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{product.name}</h6>
                    <small className="text-muted">{product.description}</small>
                  </div>
                  <span className="text-muted">{`$${product.price} (x${product.quantity})`}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>"promocode"</small>
                </div>
                <span className="text-success"> - $15</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${totalprice-15}</strong>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CheckoutView;
