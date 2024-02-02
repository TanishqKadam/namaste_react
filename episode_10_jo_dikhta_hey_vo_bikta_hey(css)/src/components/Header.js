import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [reactBtnChange, setReactBtnChange] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg mb-2 ">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 ">Online Status:{onlineStatus ? "✔" : "❌"}</li>
          <li className="px-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">contact us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              reactBtnChange === "Login"
                ? setReactBtnChange("Logout")
                : setReactBtnChange("Login");
            }}
          >
            {reactBtnChange}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
