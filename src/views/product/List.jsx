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
import purpleImage from './fas.png';

function ProductListView() {
  const [currentProducts, setCurrentProducts] = useState([]);
  const { searchState, setSearchText } = useSearch();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, settotalItems] = useState(0);
  const [minvalue, setminvalue] = useState(0);
  const [maxvalue, setmaxvalue] = useState(0);
  const [view, setView] = useState("list");
  const categories = [
    "All Categories",
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
   
    if(category === "All Categories")
    {
      
      setSelectedCategory("all");
    }
    else
    {
      
      setSelectedCategory(category);
    }
  };
  const [priceValue, setPriceValue] = useState([0, 1000]);
  const [rating, setrating] = useState(1);

  const handlePriceValueChange = (newValue) => {
    setPriceValue(newValue);
  };
  const handeleRatingchange = (newValue) => {
    setrating(newValue);
  };
  const [lastsearch,setlastsearch] = useState("") ;
  useEffect(() => {
    const searchedText = searchState.searchText

    ;
   
    
  
   
    let link = `https://ecommersebackend1.onrender.com/api/v1/products?page=${currentPage}&price[gte]=${priceValue[0]}&price[lte]=${priceValue[1]}&ratings[gte]=${rating}`;

if (searchedText && selectedCategory) {
 
    if(lastsearch === searchedText)
    {
      if (selectedCategory !== "all") {
      
      link = `https://ecommersebackend1.onrender.com/api/v1/products?page=${currentPage}&price[gte]=${priceValue[0]}&price[lte]=${priceValue[1]}&ratings[gte]=${rating}&category=${selectedCategory}`;
      }}
  else{
    
    link += `&keyword=${searchedText}`;
    setlastsearch(searchedText);


   }
}
else if (searchedText) {
  link += `&keyword=${searchedText}`;
  setlastsearch(searchedText);
 

  
}

else if (selectedCategory) {
  if (selectedCategory !== "all") {
    link += `&category=${selectedCategory}`;
  }
   
}

// If both search and category are selected, clear the category and apply the search.

    
  
    axios
      .get(link, {
        withCredentials: true,
        crossDomain: true,
      })
      .then((response) => {
        const products = response.data.products;
        setCurrentProducts(products);
        settotalItems(response.data.fiterproductcount);
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
     <div className="p-5 bg-3f51b5">
        
          <img
            src={purpleImage}
            alt="Purple"
            style={{
              width: '100%',
              height: '300px',
             
              top: 0,
              left: 0,
            }}
          />
   
  
</div>

    
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
            <div className="row"  style={{background:"#8597ff"}}>
              <div className="col-7">
                <span className="align-middle fw-bold">
                  {totalItems} results for  
                  <span className="text-warning"> { searchState.searchText}</span>
                </span>
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
                  <div key={idx} className="col-md-12" >
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
