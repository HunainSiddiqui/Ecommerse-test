import React, { lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

function SignUpView() {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const formdata = {
      name: values.firstName,
      email: values.email,
      password: values.password,
      role:"admin"

    };

    try {
      const res = await axios.post(
        "https://ecommersebackend1.onrender.com/api/v1/register",
        formdata
      );
      const token = res.data.token;
      if (res.status === 201) {
        navigate("/account/signin");
        toast.success('Welcome', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
     
    } catch (error) {
      toast.error(`Please Try Again , An Error Occured`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,

        draggable: true,
        progress: undefined,
        theme: "colored",
        });
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
    </div>
    
  );
  
}

export default SignUpView;
