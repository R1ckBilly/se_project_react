import { useContext } from "react";

import "./ToogleSwitch.css";

import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnitContext";

function ToogleSwitch() {
  const contextValue = useContext(CurrentTemperatureUnitContext);

  return (
    <label htmlFor="toogle-switch" className="toogle__switch">
      <input
        id="toogle-switch"
        type="checkbox"
        className="toogle__switch-checkbox"
        onChange={contextValue.handleTempUnitChange}
      />
      <span className="toogle__switch-circle"></span>
      <span className="toogle__switch-value toogle__switch-value_left">F</span>
      <span className="toogle__switch-value toogle__switch-value_right">C</span>
    </label>
  );
}

export default ToogleSwitch;
