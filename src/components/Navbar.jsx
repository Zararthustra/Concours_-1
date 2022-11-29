import { Cart } from "./Cart";
import { ReactComponent as Profile } from "../SVG/profile.svg";
import { ReactComponent as Samsung } from "../SVG/samsung.svg";

export const Navbar = ({ cartNumber }) => {
  return (
    <>
      <nav>
        <a href="https://www.samsung.com/fr/smartphones/galaxy-s22/buy/?cid=fr_pd_ppc_google_f1h22_launch_S22-IM-Shop_text_none_none&gclid=CjwKCAiA7IGcBhA8EiwAFfUDsc5pAQ4rwZ0mM0ENB0re9uu5oS4CYULZGMlTBWmqGviw_nNDLYQ2KxoCy3YQAvD_BwE&gclsrc=aw.ds">
          <Samsung
            fill="#333"
            alt="Logo Samsung et lien vers la page produit officielle"
            title="Voir la page produit officielle"
          />
        </a>
        <div className="icons">
          <Cart fill="#333" cartNumber={cartNumber} />
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
