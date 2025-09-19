import { useContext } from "react";

import "./ToggleSwitch.css";

import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const contextValue = useContext(CurrentTemperatureUnitContext);

  return (
    <label htmlFor="toggle-switch" className="toggle__switch">
      <input
        id="toggle-switch"
        type="checkbox"
        className="toggle__switch-checkbox"
        onChange={contextValue.handleTempUnitChange}
      />
      <span className="toggle__switch-circle"></span>
      <span className="toggle__switch-value toggle__switch-value_left">F</span>
      <span className="toggle__switch-value toggle__switch-value_right">C</span>
    </label>
  );
}

export default ToggleSwitch;
