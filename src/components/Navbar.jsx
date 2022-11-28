import { Cart } from "./Cart";
import { ReactComponent as Profile } from "../SVG/profile.svg";
import { ReactComponent as Samsung } from "../SVG/samsung.svg";
import { getContrast } from "../utils/getContrast";
import { ColorBubble } from "./ColorBubble";

export const Navbar = ({ color, cartNumber }) => {
  return (
    <>
      <ColorBubble
        size={"20rem"}
        top={"-10rem"}
        left={"-8rem"}
        backgroundColor={color}
      />
      <ColorBubble
        size={"20rem"}
        top={"-12rem"}
        right={"2.5rem"}
        backgroundColor={color}
      />
    <nav>
      <a href="https://www.samsung.com/fr/smartphones/galaxy-s22/buy/?cid=fr_pd_ppc_google_f1h22_launch_S22-IM-Shop_text_none_none&gclid=CjwKCAiA7IGcBhA8EiwAFfUDsc5pAQ4rwZ0mM0ENB0re9uu5oS4CYULZGMlTBWmqGviw_nNDLYQ2KxoCy3YQAvD_BwE&gclsrc=aw.ds">
        <Samsung
          fill={getContrast(color)}
          alt="Logo Samsung et lien vers la page produit officielle"
          title="Aller à la page produit officielle"
        />
      </a>
      <div className="icons">
        <Cart fill={getContrast(color)} cartNumber={cartNumber} />
        <Profile
          fill="none"
          stroke="#333"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </div>
    </nav>
    </>
  );
};
