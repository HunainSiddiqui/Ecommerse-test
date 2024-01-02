import Header from "../../components/Header";
import React, { useState, lazy, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../contex/Cartcontex";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faShoppingCart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../../data";
import { useNavigate } from "react-router-dom";
const CardFeaturedProduct = lazy(() =>
  import("../../components/card/CardFeaturedProduct")
);

const CardServices = lazy(() => import("../../components/card/CardServices"));
const Details = lazy(() => import("../../components/others/Details"));
const RatingsReviews = lazy(() =>
  import("../../components/others/RatingsReviews")
);
const QuestionAnswer = lazy(() =>
  import("../../components/others/QuestionAnswer")
);
const ShippingReturns = lazy(() =>
  import("../../components/others/ShippingReturns")
);
const SizeChart = lazy(() => import("../../components/others/SizeChart"));

function ProductDetailView() {
  const [productdata, setproductdata] = useState(null);
  const [featuredproduct, setfeaturedproduct] = useState([]);
  const [count, setCount] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [mainimg, setmainimg] = useState("");
  function decreaseHandler() {
    setCount(count === 1 ? (count = 1) : count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }

  const { id } = useParams();
  const { state, dispatch } = useCart();

  const addToCart = () => {
    productdata.quantity = count;
    productdata.totalprice = 0;
    dispatch({ type: "ADD_TO_CART", payload: productdata });
    setCartCount(cartCount + 1);
    toast.info("Item added to Cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const navigate = useNavigate();
  const buyNow = () => {
     productdata.quantity = count;
    dispatch({ type: "ADD_TO_CART", payload: productdata });
    navigate("/checkout");
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://ecommersebackend1.onrender.com/api/v1/product/${id}`
      );
      if (response.status == 200) {
        try {
          const res = await axios.get(
            `https://ecommersebackend1.onrender.com/api/v1/products?category=${response.data.product.category}`
          );

          setfeaturedproduct(res.data.products);
        } catch (error) {
          console.error(error);
        }
      }

      setproductdata(response.data.product);
      setmainimg(response.data.product.images[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  const featureproduct = async () => {
    try {
      const response = await axios.get(
        `https://ecommersebackend1.onrender.com/api/v1/products?category=${productdata.category}`
      );
      console.log(response.data.product);
      setfeaturedproduct(response.data.product);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-3">
            {productdata ? (
              <>
                <div className="col-md-5 text-center">
                  <img src={mainimg} className="img-fluid mb-3" alt="." />
                  <img
                    src={
                      productdata.images && productdata.images[1]
                        ? productdata.images[1].url
                        : "not"
                    }
                    onClick={() => {
                      setmainimg(
                        productdata.images && productdata.images[1]
                          ? productdata.images[1].url
                          : "not"
                      );
                    }}
                    className="border border-secondary me-2"
                    width="75"
                    alt="..."
                  />
                  <img
                    src={
                      productdata.images && productdata.images[0]
                        ? productdata.images[0].url
                        : "not"
                    }
                    className="border border-secondary me-2"
                    width="75"
                    alt="..."
                    onClick={() => {
                      setmainimg(
                        productdata.images && productdata.images[0]
                          ? productdata.images[0].url
                          : "not"
                      );
                    }}
                  />
                </div>
                <div className="col-md-7">
                  <h1 className="h5 d-inline me-2">{productdata.name}</h1>
                  <span className="badge bg-success me-2">New</span>
                  <span className="badge bg-danger me-2">Hot</span>
                  <div className="mb-3">
                    <IconStarFill className="text-warning me-1" />
                    <IconStarFill className="text-warning me-1" />
                    <IconStarFill className="text-warning me-1" />
                    <IconStarFill className="text-warning me-1" />
                    <IconStarFill className="text-secondary me-1" />|{" "}
                    <span className="text-muted small">
                      42 ratings and 4 reviews
                    </span>
                  </div>
                  <dl className="row small mb-3">
                    <dt className="col-sm-3">Availability</dt>
                    <dd className="col-sm-9">In stock</dd>
                    <dt className="col-sm-3">Sold by</dt>
                    <dd className="col-sm-9">Authorised Store</dd>
                    <dt className="col-sm-3">Size</dt>
                    <dd className="col-sm-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size"
                          id="sizes"
                        />
                        <label className="form-check-label" htmlFor="sizes">
                          S
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size"
                          id="sizem"
                          disabled
                        />
                        <label className="form-check-label" htmlFor="sizem">
                          M
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size"
                          id="sizel"
                        />
                        <label className="form-check-label" htmlFor="sizel">
                          L
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size"
                          id="sizexl"
                        />
                        <label className="form-check-label" htmlFor="sizexl">
                          XL
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size"
                          id="sizexxl"
                        />
                        <label className="form-check-label" htmlFor="sizexxl">
                          XXL
                        </label>
                      </div>
                    </dd>
                    <dt className="col-sm-3">Color</dt>
                    <dd className="col-sm-9">
                      <button className="btn btn-sm btn-primary p-2 me-2"></button>
                      <button className="btn btn-sm btn-secondary p-2 me-2"></button>
                      <button className="btn btn-sm btn-success p-2 me-2"></button>
                      <button className="btn btn-sm btn-danger p-2 me-2"></button>
                      <button className="btn btn-sm btn-warning p-2 me-2"></button>
                      <button className="btn btn-sm btn-info p-2 me-2"></button>
                      <button className="btn btn-sm btn-dark p-2 me-2"></button>
                    </dd>
                  </dl>
                  <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                  />

                  <div className="mb-3">
                    <span className="fw-bold h5 me-2">
                      {" "}
                      $ {productdata.price}{" "}
                    </span>
                    <del className="small text-muted me-2">$2000</del>
                    <span className="rounded p-1 bg-warning  me-2 small">
                      -$100
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="d-inline float-start me-2">
                      <div className="input-group input-group-sm mw-140 ">
                        <button
                          onClick={decreaseHandler}
                          className="btn  text-white"
                          style={{background:"#8597ff"}}
                          type="button"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue=""
                          placeholder={count}
                        />
                        <button
                          onClick={increaseHandler}
                          className="btn  text-white"
                          style={{background:"#8597ff"}}
                          type="button"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-sm  me-2"
                      style={{background:"#8597ff"}}
                      title="Add to cart"
                      onClick={addToCart}
                    >
                      <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm me-4"
                      style={{background:"#8597ff"}}
                      title="Buy now"
                      onClick={buyNow}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} /> Buy now
                    </button>
                  </div>
                  <div>
                    <p className="fw-bold mb-2 small">Product Highlights</p>
                    <ul className="small">
                      <li>{productdata.description}</li>
                      <li>Etiam ullamcorper nibh eget faucibus dictum.</li>
                      <li>Cras consequat felis ut vulputate porttitor.</li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-link active"
                    id="nav-details-tab"
                    data-bs-toggle="tab"
                    href="#nav-details"
                    role="tab"
                    style={{color:"#8597ff"}}
                    aria-controls="nav-details"
                    aria-selected="true"
                  >
                    Details
                  </a>
                  <a
                    className="nav-link"
                    id="nav-randr-tab"
                    data-bs-toggle="tab"
                    href="#nav-randr"
                    role="tab"
                    style={{color:"#8597ff"}}
                    aria-controls="nav-randr"
                    aria-selected="false"
                  >
                    Ratings & Reviews
                  </a>
                  <a
                    className="nav-link"
                    id="nav-faq-tab"
                    data-bs-toggle="tab"
                    href="#nav-faq"
                    role="tab"
                    style={{color:"#8597ff"}}
                    aria-controls="nav-faq"
                    aria-selected="false"
                  >
                    Questions and Answers
                  </a>
                  <a
                    className="nav-link"
                    id="nav-ship-returns-tab"
                    data-bs-toggle="tab"
                    href="#nav-ship-returns"
                    role="tab"
                    style={{color:"#8597ff"}}
                    aria-controls="nav-ship-returns"
                    aria-selected="false"
                  >
                    Shipping & Returns
                  </a>
                  <a
                    className="nav-link"
                    id="nav-size-chart-tab"
                    data-bs-toggle="tab"
                    href="#nav-size-chart"
                    style={{color:"#8597ff"}}
                    role="tab"
                    aria-controls="nav-size-chart"
                    aria-selected="false"
                  >
                    Size Chart
                  </a>
                </div>
              </nav>
              <div className="tab-content p-3 small" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-details"
                  role="tabpanel"
                  aria-labelledby="nav-details-tab"
                >
                  <Details />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-randr"
                  role="tabpanel"
                  aria-labelledby="nav-randr-tab"
                >
                  {Array.from({ length: 5 }, (_, key) => (
                    <RatingsReviews key={key} />
                  ))}
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-faq"
                  role="tabpanel"
                  aria-labelledby="nav-faq-tab"
                >
                  {/* <dl>
                    {Array from({length:5 }, (key) => (
                      <QuestionAnswer key={key} />
                    )}
                  </dl> */}
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-ship-returns"
                  role="tabpanel"
                  aria-labelledby="nav-ship-returns-tab"
                >
                  <ShippingReturns />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-size-chart"
                  role="tabpanel"
                  aria-labelledby="nav-size-chart-tab"
                >
                  <SizeChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <CardFeaturedProduct data={featuredproduct} />
          <CardServices />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailView;
