import React from 'react'
import { Link } from "react-router-dom";
const ProductItem = (props) => {

  const data =  props.product ;


  console.log(data);
  return (
    
    <div className="container">
      <div className="row">
        <div className="my-2">
        <Link to={"/category"}>
            <div className="card" style={{ width: "20rem" }}>
             
                <img src={data.img} className="card-img-top" alt="..." />
             
            </div>
            </Link>
          <div className="card-body">
            <h5
              className="card-title "
              style={{  "font-family": "Montagu Slab , sans-serif", "font-weight":"bold"}}
            >
              {data.title}
            </h5>
            <Link className="btn btn-sm " style={{background:"#8597ff"}} to={"/category"}>
              Explore More
              </Link>
          </div>
          <br />
          <Link to={"/category"}>
          <div className="card" style={{ width: "20rem" }}>
          
                <img src={data.img2} className="card-img-top" alt="..." />
            
          </div>
          </Link>
          <div className="card-body mb-3">
            <h5
              className="card-title"
              style={{  "font-family": "Montagu Slab , sans-serif", "font-weight":"bold"}}
            >
              {data.title2}
            </h5>
            <Link className="btn btn-sm " style={{background:"#8597ff"}} to={"/category"}>
              Explore More
              </Link>
          </div>
          {/* <div className=" my-3">
            <div className="card col-md-4" style={{ width: "20rem" }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1673758901314-e7713530062d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body ">
              <h5 className="card-title">JumpSuits and Dresses</h5>
              <a
                // href={newsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                More Designs.. ➡️
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;