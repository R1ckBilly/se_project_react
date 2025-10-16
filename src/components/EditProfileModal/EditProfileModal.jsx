import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForms";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./EditProfileModal.css";
import CurrentUserContext from "../../context/CurrentUserContext";

function EditProfileModal({ isOpen, isClosed, handleEditProfileSubmit }) {
  const { values, handleChange, setValues } = useForm({
    name: "",
    avatar: "",
  });

  const currentUser = useContext(CurrentUserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditProfileSubmit(values);
  };

  useEffect(() => {
    if (!isOpen) {
      setValues({ name: currentUser.name, avatar: currentUser.avatar });
    }
  }, [isOpen, setValues]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      isClosed={isClosed}
      title="Change profile data"
      buttonText="Save changes"
      name="edit-profile"
      handleSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="edit-name" className="modal__label">
          Name
        </label>
        <input
          id="edit-name"
          type="text"
          name="name"
          placeholder="Name"
          className="modal__input"
          value={values.name}
          onChange={handleChange}
        />

        <label htmlFor="edit-avatar" className="modal__label">
          Avatar
        </label>
        <input
          id="edit-avatar"
          type="url"
          name="avatar"
          placeholder="Avatar Url"
          className="modal__input"
          value={values.avatar}
          onChange={handleChange}
        />
      </fieldset>
    </ModalWithForm>
  );
}

export default EditProfileModal;
