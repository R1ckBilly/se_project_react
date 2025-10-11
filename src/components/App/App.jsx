import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import CurrentUserContext from "../../context/CurrentUserContext";
import { defaultClothingItems } from "../../utils/defaultClothingItems";
import "./App.css";
import { getWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnitContext";
import {
  addItem,
  deleteItem,
  getItems,
  signup,
  signin,
  getCurrentUser,
} from "../../utils/api";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    addItem(inputValues, currentUser.token)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseItemModal();
      })
      .catch(console.error);
  }

  function handleDeleteItem(cardToDelete) {
    deleteItem(cardToDelete._id, currentUser.token)
      .then(() => {
        const updatedItems = clothingItems.filter(
          (item) => item._id !== cardToDelete._id
        );
        setClothingItems(updatedItems);
        handleCloseItemModal();
      })
      .catch(console.error);
  }

  function handleRegisterSubmit(formData) {
    signup(formData)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        setActiveModal("");
        localStorage.setItem("token", user.token);
      })
      .catch(console.error);
  }

  function handleLoginSubmit(formData) {
    signin(formData)
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        setActiveModal("");
        localStorage.setItem("token", user.token);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items.data.reverse());
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getCurrentUser(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch(() => localStorage.removeItem("jwt"));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTempUnit, handleTempUnitChange }}
        >
          <div className="app">
            <Header
              weatherData={weatherData}
              handleOpenAddGarmentModal={handleOpenAddGarmentModal}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              onSignUp={() => setActiveModal("register")}
              onSignIn={() => setActiveModal("login")}
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
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      clothingItems={clothingItems}
                      handleOpenAddGarmentModal={handleOpenAddGarmentModal}
                      handleOpenItemModal={handleOpenItemModal}
                    />
                  </ProtectedRoute>
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
            <RegisterModal
              isOpen={activeModal === "register"}
              isClosed={() => setActiveModal("")}
              handleRegisterSubmit={handleRegisterSubmit}
            />
            <LoginModal
              isOpen={activeModal === "login"}
              isClosed={() => setActiveModal("")}
              handleLoginSubmit={handleLoginSubmit}
            />
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
