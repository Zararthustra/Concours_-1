import green from "../assets/green/green0.png";
import black from "../assets/black/black0.png";
import white from "../assets/white/white0.png";
import pink from "../assets/pink/pink0.png";
import { getColorName } from "../utils/getColorName";

export const LeftBloc = ({ color, setColor }) => {
  const colors = [
    "var(--black)",
    "var(--white)",
    "var(--green)",
    "var(--pink)",
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
    <div className="leftBloc">
      {colors.map((item, index) => {
        return (
          <img
            key={index}
            className={isSelected(item) ? "isSelected" : ""}
            id={"img" + (index + 1)}
            onClick={() => setColor(item)}
            style={{
              zIndex: isSelected(item) ? "1" : "0",
              filter: isSelected(item)
                ? "drop-shadow(4px 4px 10px black)"
                : "grayscale(100%)",
            }}
            src={getImage(item)}
            alt={"Samsung Galaxy S22 " + getColorName(item)}
            title={"Samsung Galaxy S22 " + getColorName(item)}
          />
        );
      })}
    </div>
  );
};
