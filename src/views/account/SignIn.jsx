import React, { lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


const SignInForm = lazy(() => import("../../components/account/SignInForm"));

function SignInView() {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
   
    const formdata = {
    
      email: values.email,
      password: values.password,
    };

    try {
      const res = await axios.post(
        "https://ecommersebackend1.onrender.com/api/v1/login",
        formdata, {
          withCredentials: true,
          crossDomain: true,
        }
      );
     
      
        console.log(res.status);
    
      if (res.status === 200) {
       
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
          navigate("/");

      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(`Invalid Credentials`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
  
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        }
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
          <h4 className="text-center">Sign In</h4>
          <SignInForm onSubmit={onSubmit} />
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

export default SignInView;
