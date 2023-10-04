import React, { lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

function SignUpView() {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const formdata = {
      name: values.firstName,
      email: values.email,
      password: values.password,
    };

    try {
      const res = await axios.post(
        "https://ecommersebackend1.onrender.com/api/v1/register",
        formdata
      );
      if (res.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-3">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <Link to="/">
            <img
              src="../../images/banner/Dell.webp"
              alt="..."
              className="img-fluid"
            />
          </Link>
          <Link to="/">
            <img
              src="../../images/banner/Laptops.webp"
              alt="..."
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-md-6 p-3">
          <h4 className="text-center">Sign Up</h4>
          <SingUpForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default SignUpView;
