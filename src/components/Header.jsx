import { ModelTitle } from "./ModelTitle";
import backgroundImage from "../assets/all-colors3.jpeg";

export const Header = ({ color }) => {
  return (
    <header>
      <div>
        <img
          src={backgroundImage}
          alt="Samsung Galaxy S22 présentation quatre couleurs"
        />
      </div>
      <ModelTitle color={color} />
    </header>
  );
};
