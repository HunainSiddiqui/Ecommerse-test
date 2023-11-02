import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import Paging from "../../components/Paging";
import Pagination from "react-js-pagination";
import Breadcrumb from "../../components/Breadcrumb";
import FilterCategory from "../../components/filter/Category";
import RangeSlider from "../../components/filter/Price";
import FilterSize from "../../components/filter/Size";
import FilterStar from "../../components/filter/Star";
import FilterColor from "../../components/filter/Color";
import FilterTag from "../../components/filter/Tag";
import FilterClear from "../../components/filter/Clear";
import CardServices from "../../components/card/CardServices";
import CardProductGrid from "../../components/card/CardProductGrid";
import CardProductList from "../../components/card/CardProductList";
import { useSearch } from '../../contex/SearchContex';
import axios from "axios";
import { data } from "../../data";

function ProductListView() {
  const [currentProducts, setCurrentProducts] = useState([]);
  const { searchState, setSearchText } = useSearch();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, settotalItems] = useState(0);
  const [minvalue, setminvalue] = useState(0);
  const [maxvalue, setmaxvalue] = useState(0);
  const [view, setView] = useState("list");
  const categories = [
    "Clothing",
    "ball",
    "Pen",
    "Sweater & Cardigans",
    "High Heels",
    "Coats & Jackets",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    console.log(selectedCategory);
   
    if(category === "all")
    {
      setSelectedCategory("");
    }
    else
    {

      setSelectedCategory(category);
    }
  };
  const [priceValue, setPriceValue] = useState([0, 1000]);
  const [rating, setrating] = useState(5);

  const handlePriceValueChange = (newValue) => {
    setPriceValue(newValue);
  };
  const handeleRatingchange = (newValue) => {
    setrating(newValue);
  };

  useEffect(() => {
    const searchedText = searchState.searchText

    ;
    
    let link ;
    if (selectedCategory === "") {
     
      if (searchedText) {
        link = `https://ecommersebackend1.onrender.com/api/v1/products?page=${currentPage}&price[gte]=${priceValue[0]}&price[lte]=${priceValue[1]}&ratings[gte]=${rating}&keyword=${searchedText}`;

      } else {
        link = `https://ecommersebackend1.onrender.com/api/v1/products?page=${currentPage}&price[gte]=${priceValue[0]}&price[lte]=${priceValue[1]}&ratings[gte]=${rating}`;

        
      }
    }
    else{
      if (searchedText) {
        link = `https://ecommersebackend1.onrender.com/api/v1/products?page=${currentPage}&category=${selectedCategory}&price[gte]=${priceValue[0]}&price[lte]=${priceValue[1]}&ratings[gte]=${rating}&keyword=${searchedText}`;
 
      } else {
        link = `https://ecommersebackend1.onrender.com/api/v1/products?page=${currentPage}&category=${selectedCategory}&price[gte]=${priceValue[0]}&price[lte]=${priceValue[1]}&ratings[gte]=${rating}`; 
      }
    }
    axios
      .get(link, {
        withCredentials: true,
        crossDomain: true,
      })
      .then((response) => {
        const products = response.data.products;
        setCurrentProducts(products);
        settotalItems(products.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage, selectedCategory, priceValue, rating,searchState]);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const onChangeView = (view) => {
    setView(view);
  };

  return (
    <React.Fragment>
      <div className="p-5 bg-primary bs-cover">
        <div className="container text-center">
          <span className="display-5 px-3 bg-white rounded shadow">
            👕T-Shirts👕
          </span>
        </div>
      </div>
      <Breadcrumb />
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-3">
            <FilterCategory
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
            <RangeSlider onValueChange={handlePriceValueChange} />

            <FilterStar onratingChange={handeleRatingchange} />
            {/* <FilterColor /> */}
            {/* <FilterClear /> */}
            {/* <FilterTag /> */}
            <CardServices />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-7">
                <span className="align-middle fw-bold">
                  {totalItems} results for{" "}
                  <span className="text-warning">"t-shirts"</span>
                </span>
              </div>
              <div className="col-5 d-flex justify-content-end">
                <select
                  className="form-select mw-180 float-start"
                  aria-label="Default select"
                >
                  <option value={1}>Most Popular</option>
                  <option value={2}>Latest items</option>
                  <option value={3}>Trending</option>
                  <option value={4}>Price low to high</option>
                  <option value={4}>Price high to low</option>
                </select>
                <div className="btn-group ms-3" role="group">
                  <button
                    aria-label="Grid"
                    type="button"
                    onClick={() => onChangeView("grid")}
                    className={`btn ${
                      view === "grid" ? "btn-primary" : "btn-outline-primary"
                    }`}
                  >
                    <FontAwesomeIcon icon={faTh} />
                  </button>
                  <button
                    aria-label="List"
                    type="button"
                    onClick={() => onChangeView("list")}
                    className={`btn ${
                      view === "list" ? "btn-primary" : "btn-outline-primary"
                    }`}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row g-3">
              {view === "grid" &&
                currentProducts.map((product, idx) => (
                  <div key={idx} className="col-md-4">
                    <CardProductGrid data={product} />
                  </div>
                ))}
              {view === "list" &&
                currentProducts.map((product, idx) => (
                  <div key={idx} className="col-md-12">
                    <CardProductList data={product} />
                  </div>
                ))}
            </div>
            <hr />

            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={5}
                totalItemsCount={totalItems}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductListView;
