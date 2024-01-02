import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
// import { link45, file, check2all } from "../npm/icon";
import ProductItem from "./ProductItem"
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);

class HomeView extends Component {
  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };

  render() {
    const iconProducts = data.iconProducts;
    const rows = [...Array(Math.ceil(iconProducts.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 1, idx * 3 + 3)
    );
    console.log(productRows);
    // map the rows as div.row
    const carouselContent = productRows.map((row, idx) => (
     
        <div className="row g-4">
          {row.map((product, idx) => {
           
            return (
              <div className="col-md-4">

                <ProductItem
                 product =
                 {product}
                />
              </div>
            );
          })}
        </div>
    
    ));

    return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
        <div className="container-fluid bg-light mb-3">
          <div className="row g-3">
            <div className="col-md-9">
             
                {carouselContent}
             
           
            </div>
            <div className="col-md-3">
              <CardLogin className="mb-3" />
              <CardImage src="../../images/banner/active.webp " to="/list" />
              <br />

              
              <CardImage src="../../images/banner/smiley.webp" to="/list" />
              <br />
              <CardImage src="../../images/banner/boots.webp" to="/list" />
              <br />
            </div>
          </div>
        </div>
       

       
        {/* <div className="container">
          <div className="row">
            <div className="my-3">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Watches</h5>
                <a
                  // href={newsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  More Designs.. ➡️
                </a>
              </div>
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="https://images.unsplash.com/photo-1616150326910-6fdb1e30adb7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body mb-3">
                <h5 className="card-title">Jackets</h5>
                <a
                  // href={newsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  More Designs.. ➡️
                </a>
              </div>
              <div className=" my-3">
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
              </div>
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default HomeView;
