import { useEffect } from "react";
import { useForm } from "../../hooks/useForms";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./RegisterModal.css";

function RegisterModal({ isOpen, isClosed, handleRegisterSubmit, handleSwitchToLogin  }) {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegisterSubmit(values);
  };

  useEffect(() => {
    if (!isOpen) {
      setValues({ email: "", password: "", name: "", avatar:"" });
    }
  }, [isOpen, setValues]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      isClosed={isClosed}
      title="Sign Up"
      buttonText="Sign Up"
      name="sign-up-form"
      handleSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="sign-up-email" className="modal__label">
          Email
        </label>
        <input
          id="sign-up-email"
          type="email"
          name="email"
          placeholder="Email"
          className="modal__input"
          value={values.email}
          onChange={handleChange}
        />

        <label htmlFor="sign-up-password" className="modal__label">
          Password
        </label>
        <input
          id="sign-up-password"
          type="password"
          name="password"
          placeholder="Password"
          className="modal__input"
          value={values.password}
          onChange={handleChange}
        />
         <label htmlFor="sign-up-name" className="modal__label">
          Name
        </label>
        <input
          id="sign-up-name"
          type="text"
          name="name"
          placeholder="Name"
          className="modal__input"
          value={values.name}
          onChange={handleChange}
        />
         <label htmlFor="sign-up-avatar" className="modal__label">
          Avatar URL
        </label>
        <input
          id="sign-up-avatar"
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          className="modal__input"
          value={values.avatar}
          onChange={handleChange}
        />
      </fieldset>

      <div className="modal__switch">
          <button
            type="button"
            className="modal__switch-btn"
            onClick={handleSwitchToLogin}
          >
           or Log In
          </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
