import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconBriefcase } from "bootstrap-icons/icons/briefcase.svg";
import { ReactComponent as IconBadgeAd } from "bootstrap-icons/icons/badge-ad.svg";
import { ReactComponent as IconGift } from "bootstrap-icons/icons/gift.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faApple,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid bg-primary">
        
        </div>
        <div className="container-fluid bg-dark text-white">
          <div className="row ">
            <div className="col-md-3 py-3">
              <div
                className="h6"
                style={{
                  "font-family": "Montagu Slab, cursive",
                  "font-weight": "bold",
                }}
              >
                Cart Canvas - Brushstrokes of fashion.
              </div>
              <hr />
              <p
                style={{
                  "font-family": "Montagu Slab, cursive",
                }}
              >
                Our collections are inspired by the creativity and freedom of
                art. We source pieces from both established and emerging
                designers, ensuring that you'll find something that speaks to
                your soul. Whether you're a minimalist looking for a statement
                piece or a maximalist who loves to mix and match, we have
                something for you.
              </p>
            </div>
            <div className="col-md-3 py-3">
              <div
                className="h6"
                style={{
                  "font-family": "Montagu Slab, cursive",
                  "font-weight": "bold",
                }}
              >
                Hot Products
              </div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                    style={{
                      "font-family": "Nunito, cursive",
                    }}
                  >
                    Luxury Perfumes
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                    style={{
                      "font-family": "Nunito, cursive",
                    }}
                  >
                    Dresses and Tops
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                    style={{
                      "font-family": "Nunito, cursive",
                    }}
                  >
                    High Top Boots
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                    style={{
                      "font-family": "Nunito, cursive",
                    }}
                  >
                    Premium Watches
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                    style={{
                      "font-family": "Nunito, cursive",
                    }}
                  >
                    Travel Bags and Totes
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div
                className="h6"
                style={{
                  "font-family": "Montagu Slab, cursive",
                  "font-weight": "bold",
                }}
              >
                Policy
              </div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                    style={{
                      "font-family": "Nunito, cursive",
                    }}
                  >
                    Return Policy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                    style={{
                      "font-family": "Nunito, cursive",
                    }}
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                    style={{
                      "font-family": "Nunito, cursive",
                    }}
                  >
                    Security
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                    style={{
                      "font-family": "Nunito, cursive",
                    }}
                  >
                    Privacy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                    style={{
                      "font-family": "Nunito, cursive",
                    }}
                  >
                    EPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div
                className="h6"
                style={{
                  "font-family": "Montagu Slab, cursive",
                  "font-weight": "bold",
                }}
              >
                Address
              </div>
              <hr />
              <address>
                <strong
                  style={{
                    "font-family": "Nunito, cursive",
                  }}
                >
                  Made with ❤️, Cart Canvas
                </strong>
                <br
                  style={{
                    "font-family": "Nunito, cursive",
                  }}
                />
                India ❤️
                <br />
                <abbr
                  title="Phone"
                  style={{
                    "font-family": "Nunito, cursive",
                  }}
                >
                  Phone No :{" "}
                </abbr>
                7XXXXXXXXXX
              </address>
              <div
                className="h6"
                style={{
                  "font-family": "Nunito, cursive",
                }}
              >
                Customer Care
              </div>
              <hr />
              <IconTelephone
                style={{
                  "font-family": "Nunito, cursive",
                }}
              />{" "}
              9XXXXXXXXXX
              <br />
              <IconEnvelope
                style={{
                      "font-family": "Nunito, cursive",
                    }} /> cartcanvas@gmail.com
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white text-center">
          <div className="row">
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconBriefcase className="text-warning" /> Partner with us
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconBadgeAd className="text-info" /> Advertise
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconGift className="text-dark" /> Gift
              </Link>
            </div>
            <div className="col-md-3 py-2">
              ©️ 2023-{new Date().getFullYear()} 
            </div>
            <div className="col-md-3 py-2 bg-white">
              <img
                src="../../images/payment/american_express.webp"
                width="32"
                alt="American Express"
                className="me-2"
              />
              <img
                src="../../images/payment/maestro.webp"
                width="32"
                alt="Maestro"
                className="me-2"
              />
              <img
                src="../../images/payment/netbanking.webp"
                width="32"
                alt="Net Banking"
                className="me-2"
              />
              <img
                src="../../images/payment/paypal.webp"
                width="32"
                alt="Paypal"
                className="me-2"
              />
              <img
                src="../../images/payment/rupay.webp"
                width="32"
                alt="Rupay"
                className="me-2"
              />
              <img
                src="../../images/payment/upi.webp"
                width="32"
                alt="UPI"
                className="me-2"
              />
              <img
                src="../../images/payment/visa.webp"
                width="32"
                alt="Visa"
                className="me-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;