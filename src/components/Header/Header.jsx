import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

import "./Header.css";
import logo from "../../images/wtwr_logo.svg";
import avatar from "../../images/avatar_logo.svg";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  handleOpenAddGarmentModal,
  weatherData,
  isLoggedIn,
  onSignUp,
  onSignIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  const placeholder = currentUser?.name?.[0]?.toUpperCase() || "?";

  return (
    <header className="header">
      <div className="header__side">
        <Link className="header__link" to={"/"}>
          <img src={logo} alt="WTWR logo" className="header__logo" />
          <p className="header__place">
            <time className="header__datetime" dateTime={now}>
              {dateStr}
            </time>
            , {weatherData.city}
          </p>
        </Link>
      </div>

      <div className="header__side">
        <ToggleSwitch />

        {isLoggedIn ? (
          <>
            <button
              onClick={handleOpenAddGarmentModal}
              className="header__add-clothes-btn"
            >
              + Add clothes
            </button>
            <Link className="header__link" to={"/profile"}>
              <p className="header__username">{currentUser?.name}</p>

              {currentUser?.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt={`${currentUser.name}'s avatar`}
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">{placeholder}</div>
              )}
            </Link>
          </>
        ) : (
          <>
            <button className="header__auth-btn" onClick={onSignUp}>
              Sign Up
            </button>
            <button className="header__auth-btn" onClick={onSignIn}>
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
