import { useEffect } from "react";
import { useForm } from "../../hooks/useForms";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./LoginModal.css";

function LoginModal({ isOpen, isClosed, handleLoginSubmit }) {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLoginSubmit(values);
  };

  useEffect(() => {
    if (!isOpen) {
      setValues({ email: "", password: "" });
    }
  }, [isOpen, setValues]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      isClosed={isClosed}
      title="Log In"
      buttonText="Log In"
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
      </fieldset>
    </ModalWithForm>
  );
}

export default LoginModal;
