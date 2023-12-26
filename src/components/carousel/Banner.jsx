import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Item = ({ item, index }) => (
  <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
    <Link to={item.to}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={item.img}
          className="img-fluid"
          alt={item.title}
          style={{ maxHeight: "650px", width: "1470px" }}
        />
        {(item.title || item.description) && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "black",

              padding: "20px",
              textAlign: "center",
              width: "80%",

            }}
          >
            {
              <img  src={"../../images/banner/sale.png"}  style={{ maxHeight: "60px" }}></img>
            }
            {item.title && <h3>{item.title}</h3>}
            {item.description && <p>{item.description}</p>}
          </div>
        )}
      </div>
    </Link>
  </div>
);


const Indicator = ({ item, index }) => (
  <li
    data-bs-target={`#${item}`}
    data-bs-slide-to={index}
    className={`${index === 0 ? "active" : ""}`}
  />
);

const Banner = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex < props.data.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, 3000); // Change the banner every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, props.data]);

  return (
    <div
      id={props.id}
      className={`carousel slide ${props.className}`}
      data-bs-ride="carousel"
      style={{ minHeight: 100 }}
    >
      <ol className="carousel-indicators">
        {props.data.map((item, index) => (
          <Indicator item={props.id} index={index} key={index} />
        ))}
      </ol>
      <div className="carousel-inner">
        {props.data.map((item, index) => (
          <Item item={item} index={index} key={index} />
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href={`#${props.id}`}
        role="button"
        data-bs-slide="prev"
        onClick={() =>
          setActiveIndex(
            activeIndex > 0 ? activeIndex - 1 : props.data.length - 1
          )
        }
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href={`#${props.id}`}
        role="button"
        data-bs-slide="next"
        onClick={() =>
          setActiveIndex(
            activeIndex < props.data.length - 1 ? activeIndex + 1 : 0
          )
        }
      >
        <span className="carousel-control-next-icon" ariahidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Banner;
