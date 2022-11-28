import green from "../assets/green/green0.png";
import black from "../assets/black/black0.png";
import white from "../assets/white/white0.png";
import pink from "../assets/pink/pink0.png";
import { getColorName } from "../utils/getColorName";
import { ColorBubble } from "./ColorBubble";

export const BlocA = ({ color, setColor }) => {
  const colors = [
    "var(--green)",
    "var(--pink)",
    "var(--white)",
    "var(--black)",
  ];
  const getImage = (CSSColor) => {
    switch (CSSColor) {
      case "var(--black)":
        return black;
      case "var(--white)":
        return white;
      case "var(--green)":
        return green;
      case "var(--pink)":
        return pink;
      default:
        return;
    }
  };
  const isSelected = (selfColor) => {
    return color === selfColor;
  };

  return (
    <div className="blocA">
      <ColorBubble
        size={"52rem"}
        top={"-10rem"}
        left={"-10rem"}
        backgroundColor={color}
        zIndex={"-1"}
      />
      <h2>{getColorName(color).toUpperCase()}</h2>
      <div>
        {colors.map((item, index) => {
          return (
            <img
              key={index}
              className={isSelected(item) ? "isSelected" : ""}
              id={"img" + (index + 1)}
              onClick={() => setColor(item)}
              style={{
                filter: isSelected(item)
                  ? "drop-shadow(4px 4px 10px black)"
                  : "grayscale(90%)",
              }}
              src={getImage(item)}
              alt={"Samsung Galaxy S22 " + getColorName(item)}
              title={"Samsung Galaxy S22 " + getColorName(item)}
            />
          );
        })}
      </div>
    </div>
  );
};
