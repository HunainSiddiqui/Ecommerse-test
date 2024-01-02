



import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormFileInput from "../../helpers/renderFormFileInput";
import {
  required,
  name as validateName,
  email as validateEmail,
} from "../../helpers/validation";
import { ReactComponent as IconPerson } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconEnvelop } from "bootstrap-icons/icons/envelope.svg";
import axios from "axios";

const ProfileForm = (props) => {
  const {
    handleSubmit,
    submitting,
    onSubmit,
    submitFailed,
    onImageChange,
    imagePreview,
  } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [isEditing, setIsEditing] = useState(false);
  const handle = async() => {
    try {
      const res = await axios.get(
        "https://ecommersebackend1.onrender.com/api/v1/me",
        {
          withCredentials: true,
          crossDomain: true,
        }
      );
      const { name, email } = res.data.user;
      setName(name);
      setEmail(email);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    handle() ;
     
  },[] );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmitForm = (formData) => {
    // Send a PUT request to update the user's information
    axios.put("https://ecommersebackend1.onrender.com/api/v1/me/update", {
      name: formData.name,
      email: formData.email,
    },
    {
      withCredentials: true,
      crossDomain: true,
    })
      .then((response) => {
        // Handle the response if needed
        setIsEditing(false); // Switch back to "view" mode
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(isEditing ? handleSubmitForm : onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="card border-primary">
      <img
          src={imagePreview ? imagePreview : "../../images/NO_IMG.png"}
          alt=""
          className="card-img-top rounded-0 img-fluid "
        />
       <h6 className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background:"#8597ff" }}>
  Profile Detail
  {isEditing ? (
    <button
      type="submit"
      className="btn btn-success btn-sm"
      style={{ marginLeft: 'auto' }}
    >
      Save
    </button>
  ) : (
    <button
      type="button"
      className="btn btn-primary btn-sm"
      style={{ marginLeft: 'auto' }}
      onClick={handleEditClick}
    >
      Edit
    </button>
  )}
</h6>

        {/* ... Image and other fields ... */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Field
              name="name"
              type="text"
              component={renderFormGroupField}
              placeholder={isEditing ? "" : name}
              icon={IconPerson}
              validate={isEditing ? [required, validateName] : []}
              required={true}
              disabled={!isEditing}
            />
          </li>

          <li className="list-group-item">
            <Field
              name="email"
              type="email"
              component={renderFormGroupField}
              placeholder={isEditing ? "" : email}
              icon={IconEnvelop}
              validate={isEditing ? [required, validateEmail] : []}
              required={true}
              disabled={!isEditing}
            />
          </li>
        </ul>
        {/* ... Submit button ... */}
      </div>
    </form>
  );
};

export default compose(reduxForm({ form: "profile" }))(ProfileForm);

