import { useState } from "react";
import { useEffect } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import { defaultClothingItems } from "../../utils/defaultClothingItems";
import "./App.css";
import { getWeatherData } from "../../utils/weatherApi";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleCloseItemModal(card) {
    setActiveModal("");
    setSelectedCard({});
  }

  function handleOpenAddGarmentModal() {
    setActiveModal("add-garment-modal");
  }

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <Header
        weatherData={weatherData}
        handleOpenAddGarmentModal={handleOpenAddGarmentModal}
      />
      <Main
        weatherData={weatherData}
        clothingItems={clothingItems}
        handleOpenItemModal={handleOpenItemModal}
      />
      <Footer />
      <ItemModal
        card={selectedCard}
        isOpen={activeModal === "item-modal"}
        isClosed={handleCloseItemModal}
      />
      <ModalWithForm
        isOpen={activeModal === "add-garment-modal"}
        isClosed={handleCloseItemModal}
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
            />
            <label className="modal__label" htmlFor="cold">
              Cold
            </label>
          </div>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;

// TODO - apply all styles from figma to all components
// TODO - implement the footer
