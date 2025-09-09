import "./ToogleSwitch.css";

function ToogleSwitch() {
  return (
      <label htmlFor="toogle-switch" className="toogle__switch">
        <input
          id="toogle-switch"
          type="checkbox"
          className="toogle__switch-checkbox"
        />
        <span className="toogle__switch-circle"></span>
        <span className="toogle__switch-value toogle__switch-value_left">F</span>
        <span className="toogle__switch-value toogle__switch-value_right">C</span>
      </label>
  );
}

export default ToogleSwitch;
