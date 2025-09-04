import { useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import WeatherCard from "../WeatherCard/WeatherCard";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <WeatherCard />
      <Footer />
    </div>
  );
}

export default App;
