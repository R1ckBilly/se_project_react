import { useForm } from "../../hooks/useForms";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ isOpen, isClosed }) {
  const { values, handleChange } = useForm({
    name: "",
    image: "",
    weather: "hot",
  });

  return (
    <ModalWithForm
      isOpen={isOpen}
      isClosed={isClosed}
      title="New garment"
      buttonText="Add garment"
      name="add-garment-form"
    >
      <fieldset className="modal__fieldset">
        <label htmlFor="add-garment-name" className="modal__label">
          Name
        </label>
        <input
          id="add-garment-name"
          type="text"
          name="name"
          placeholder="Name"
          className="modal__input"
          value={values.name}
          onChange={handleChange}
        />

        <label htmlFor="add-garment-image" className="modal__label">
          Link
        </label>
        <input
          id="add-garment-image"
          type="url"
          name="image"
          placeholder="Image URL"
          className="modal__input"
          value={values.image}
          onChange={handleChange}
        />
      </fieldset>

      <fieldset className="modal__fieldset">
        <legend>Select the weather type:</legend>

        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="hot"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
          />
          <label className="modal__label" htmlFor="hot">
            Hot
          </label>
        </div>

        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="warm"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          <label className="modal__label" htmlFor="warm">
            Warm
          </label>
        </div>

        <div>
          <input
            className="modal__radio-btn"
            type="radio"
            id="cold"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          <label className="modal__label" htmlFor="cold">
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
