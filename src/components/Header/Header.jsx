import "./Header.css";
import logo from "../../images/wtwr_logo.svg";
import avatar from "../../images/avatar_logo.svg";

function Header({ handleOpenAddGarmentModal, weatherData }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="WTWR logo" className="header__logo" />
      <p className="header__place">
        <time className="header__datetime" dateTime={now}>
          {dateStr}
        </time>
        , {weatherData.city}
      </p>
      <button
        onClick={handleOpenAddGarmentModal}
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <p className="header__username">Haniel Alvarez</p>
      <img
        src={avatar}
        alt="Haniel Alvarez's avatar"
        className="header__avatar"
      />
    </header>
  );
}

export default Header;
