import { useCart } from "../contex/Cartcontex";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconInfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Button } from "@mui/material";

const Header = () => {
  const { state, dispatch, totalprice, settotalprice } = useCart();

  const handlelogout = async () => {
    try {
      const res = await axios.get(
        "https://ecommersebackend1.onrender.com/api/v1/logout"
      );
      if (res.status === 200) {
        localStorage.clear();
        dispatch({ type: "CLEAR_CART" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <header className="p-3 border-bottom bg-light">
        <div className="container-fluid">
          <div className="row g-3 justify-content-end">
            <div className="col-md-3 text-center">
              <Link to="/">
                <img alt="logo" src="../../images/logo.webp" />
              </Link>
            </div>
            <div className="col-md-5">
              <Search />
            </div>
            <div className="col-md-3 ml-auto" >
              <div className="position-relative d-inline me-3">
                <Link to="/cart" className="btn btn-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
  <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
</svg>

                  <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                    {state.items ? state.items.length : 0}
                  </div>
                </Link>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Profile"
                  data-bs-toggle="dropdown"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/account/signin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-box-arrow-in-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                        />
                      </svg>{" "}
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signup">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>{" "}
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/profile">
                      <IconPersonBadgeFill /> My Profile
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="/star/zone">
                      <IconStarFill className="text-warning" /> Star Zone
                    </Link>
                  </li> */}
                  <li>
                    <Link className="dropdown-item" to="/account/orders">
                      <IconListCheck className="text-primary" /> Orders
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="/account/wishlist">
                      <IconHeartFill className="text-danger" /> Wishlist
                    </Link>
                  </li> */}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/notification">
                      <IconBellFill className="text-primary" /> Notification
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/support">
                      <IconInfoCircleFill className="text-success" /> Support
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li onClick={handlelogout}>
                    <Link className="dropdown-item" to="/">
                      <IconDoorClosedFill className="text-danger" /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
