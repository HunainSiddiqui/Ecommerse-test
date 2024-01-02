import React, { lazy, Component } from "react";
import axios from "axios";
const ForgotPasswordForm = lazy(() =>
  import("../../components/account/ForgotPasswordForm")
);


class ForgotPasswordView extends Component {
  onSubmit = async (values) => {


    axios.post("https://ecommersebackend1.onrender.com/api/v1/forgetPassword", {
      email: values.email,
    },
    {
      withCredentials: true,
      crossDomain: true,
    })
      .then((response) => {
        // Handle the response if needed

      
      })
      .catch((error) => {
        console.log(error);
      });
   
  };
  render() {
    return (
      <div className="container my-3">
        <div className="row justify-content-md-center ">
          <div className="col-md-4 p-3 border">
            <h4 className="text-center">Forgot Password</h4>
            <ForgotPasswordForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordView;
