import SamsungLogo from "../assets/samsung-logo.png";
import { ReactComponent as Cart } from "../SVG/cart.svg";
import { ReactComponent as Profile } from "../SVG/profile.svg";
import { getContrast } from "../utils/getContrast";

export const Navbar = ({color}) => {
  return (
    <nav>
      <img src={SamsungLogo} alt="Logo Samsung" title="Logo Samsung" />
      <div className="icons">
        <Cart fill={getContrast(color)} />
        <Profile
          fill="none"
          stroke="#333"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </div>
    </nav>
  );
};
