import green1 from "../assets/green/green1.png";
import green2 from "../assets/green/green2.png";
import green3 from "../assets/green/green3.png";

import black1 from "../assets/black/black1.png";
import black2 from "../assets/black/black2.png";
import black3 from "../assets/black/black3.png";

import white1 from "../assets/white/white1.png";
import white2 from "../assets/white/white2.png";
import white3 from "../assets/white/white3.png";

import pink1 from "../assets/pink/pink1.png";
import pink2 from "../assets/pink/pink2.png";
import pink3 from "../assets/pink/pink3.png";

export const getImages = (color) => {
  switch (color) {
    case "var(--green)":
      return [green1, green2, green3];
    case "var(--black)":
      return [black1, black2, black3];
    case "var(--white)":
      return [white1, white2, white3];
    case "var(--pink)":
      return [pink1, pink2, pink3];

    default:
      return;
  }
};
