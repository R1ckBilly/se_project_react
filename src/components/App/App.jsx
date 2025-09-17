import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";

import { defaultClothingItems } from "../../utils/defaultClothingItems";
import "./App.css";
import { getWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnitContext";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

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

  function handleTempUnitChange() {
    if (currentTempUnit == "F") {
      setCurrentTempUnit("C");
    } else {
      setCurrentTempUnit("F");
    }
  }

  function handleAddItemSubmit(inputValues) {
    console.log(inputValues);
    setClothingItems([inputValues, ...clothingItems]);
    handleCloseItemModal();
  }

  function handleDeleteItem(cardToDelete) {
    const updatedItems = clothingItems.filter(
      (item) => item._id !== cardToDelete._id
    );
    setClothingItems(updatedItems);
    handleCloseItemModal();
  }

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTempUnit, handleTempUnitChange }}
    >
      <div className="app">
        <Header
          weatherData={weatherData}
          handleOpenAddGarmentModal={handleOpenAddGarmentModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                clothingItems={clothingItems}
                handleOpenItemModal={handleOpenItemModal}
              />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                clothingItems={clothingItems}
                handleOpenAddGarmentModal={handleOpenAddGarmentModal}
                handleOpenItemModal={handleOpenItemModal}
              />
            }
          ></Route>
        </Routes>

        <Footer />
        <ItemModal
          card={selectedCard}
          isOpen={activeModal === "item-modal"}
          isClosed={handleCloseItemModal}
          isDeleted={handleDeleteItem}
        />
        <AddItemModal
          isOpen={activeModal === "add-garment-modal"}
          isClosed={handleCloseItemModal}
          handleAddItemSubmit={handleAddItemSubmit}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
