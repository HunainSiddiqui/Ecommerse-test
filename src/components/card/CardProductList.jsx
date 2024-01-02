import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const CardProductList = (props) => {
  const product = props.data;
  const  id = product._id ;
  
  

 
  return (
    <div className="card" >
      <div className="row g-0">
        <div className="col-md-3 text-center">

          <img src={product.images[0].url} style={{ height: '200px', objectFit: 'cover' }} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h6 className="card-subtitle me-2 d-inline">
              <Link to={`/product/detail/${id}`} className="text-decoration-none">
          
                {product.name}
              </Link>
              
            </h6>
            {product && (
              <span className="badge bg-success me-2">New</span>
            )}
            {product && <span className="badge bg-danger me-2">Hot</span>}

            <div>
              {product.ratings > 0 &&
                Array.from({ length: 5 }, (_, key) => {
                  if (key <= product.ratings)
                    return (
                      <IconStarFill className="text-warning me-1" key={key} />
                    );
                  else
                    return (
                      <IconStarFill className="text-secondary me-1" key={key} />
                    );
                })}
            </div>
            {product.description &&
              product.description.includes("|") === false && (
                <p className="small mt-2">{product.description}</p>
              )}
            {product.description && product.description.includes("|") && (
              <ul className="mt-2">
                {product.description.split("|").map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
          <div className="mb-2">
            <span className="fw-bold h5">${product.price}</span>
            {product.price > 0 && (
              <del className="small text-muted ms-2">
                ${product.price + product.price * 0.2}
              </del>
            )}
            {(product.price > 0 || product.price > 0) && (
              <span className={`rounded p-1 bg-warning ms-2 small`}>
                -
                {product.price > 0
                  ? 20 + "%"
                  : "$" + product.price}
              </span>
            )}
          </div>
          {product&& (
            <p className="text-success small mb-2">
              <IconTruckFill /> Free shipping
            </p>
          )}

          <div className="btn-group d-flex" role="group">
            <button
              type="button"
              className="btn btn-sm btn-primary"
              title="Add to cart"
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              title="Add to wishlist"
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductList;
