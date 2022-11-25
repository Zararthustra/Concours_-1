import SamsungLogo from "../assets/samsung-logo.png";
import { ReactComponent as Cart } from "../SVG/cart.svg";
import { ReactComponent as Profile } from "../SVG/profile.svg";
export const Navbar = () => {
  return (
    <nav>
      <img src={SamsungLogo} alt="Logo Samsung" title="Logo Samsung" />
      <div className="icons">
        <Cart fill="white" />
        <Profile
          fill="none"
          stroke="black"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </div>
    </nav>
  );
};
