import SamsungLogo from "../assets/samsung-logo.png";
import { Cart } from "./Cart";
import { ReactComponent as Profile } from "../SVG/profile.svg";
import { getContrast } from "../utils/getContrast";

export const Navbar = ({ color, cartNumber }) => {
  return (
    <nav>
      <a href="https://www.samsung.com/fr/smartphones/galaxy-s22/buy/?cid=fr_pd_ppc_google_f1h22_launch_S22-IM-Shop_text_none_none&gclid=CjwKCAiA7IGcBhA8EiwAFfUDsc5pAQ4rwZ0mM0ENB0re9uu5oS4CYULZGMlTBWmqGviw_nNDLYQ2KxoCy3YQAvD_BwE&gclsrc=aw.ds">

      <img src={SamsungLogo} alt="Logo Samsung" title="Logo Samsung" />
      </a>
      <div className="icons">
        <Cart fill={getContrast(color)} cartNumber={cartNumber}/>
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
