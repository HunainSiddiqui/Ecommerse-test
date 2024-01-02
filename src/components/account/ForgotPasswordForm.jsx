import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import {
  required,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  email
} from "../../helpers/validation";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";

const ForgotPasswordForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
       <Field
        name="email"
        type="email" // Change type to "email"
        label="Email"
        component={renderFormGroupField}
        placeholder="Enter Your Email Id"
        icon={IconEnvelope} // You can change the icon to an email icon
        validate={[required, email]} // Use email validation
        required={true}
        className="mb-3"
      />
      <div className="d-grid">
        <button
          type="submit"
          className="btn mb-3"
          style={{background:"#8597ff"}}
          disabled={submitting}
        >
          Submit
        </button>
      </div>
      <Link className="float-start" to="/account/signup" title="Sign Up">
        Create your account
      </Link>
      <Link className="float-end" to="/account/signin" title="Sign In">
        Sign In
      </Link>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "forgotpassword",
  })
)(ForgotPasswordForm);
