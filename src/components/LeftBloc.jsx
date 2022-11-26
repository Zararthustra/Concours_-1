import green from "../assets/green/green0.png";
import black from "../assets/black/black0.png";
import white from "../assets/white/white0.png";
import pink from "../assets/pink/pink0.png";
import { getColorName } from "../utils/getColorName";

export const LeftBloc = ({ color, setColor }) => {
  const isSelected = (selfColor) => {
    return color === selfColor;
  };
  return (
    <div className="leftBloc">
      <img
        className={isSelected("var(--black)") ? "isSelected" : ""}
        style={{
          zIndex: isSelected("var(--black)") ? "1" : "0",
          filter: isSelected("var(--black)")
            ? "drop-shadow(4px 4px 10px black)"
            : "grayscale(100%)",
        }}
        onClick={() => setColor("var(--black)")}
        id="img1"
        src={black}
        alt={"Samsung Galaxy S22 " + getColorName("var(--black)")}
        title={"Samsung Galaxy S22 " + getColorName("var(--black)")}
      />
      <img
        className={isSelected("var(--white)") ? "isSelected" : ""}
        style={{
          zIndex: isSelected("var(--white)") ? "1" : "0",
          filter: isSelected("var(--white)")
            ? "drop-shadow(4px 4px 10px black)"
            : "grayscale(100%)",
        }}
        onClick={() => setColor("var(--white)")}
        id="img2"
        src={white}
        alt={"Samsung Galaxy S22 " + getColorName("var(--white)")}
        title={"Samsung Galaxy S22 " + getColorName("var(--white)")}
      />
      <img
        className={isSelected("var(--green)") ? "isSelected" : ""}
        style={{
          zIndex: isSelected("var(--green)") ? "1" : "0",
          filter: isSelected("var(--green)")
            ? "drop-shadow(4px 4px 10px black)"
            : "grayscale(100%)",
        }}
        onClick={() => setColor("var(--green)")}
        id="img3"
        src={green}
        alt={"Samsung Galaxy S22 " + getColorName("var(--green)")}
        title={"Samsung Galaxy S22 " + getColorName("var(--green)")}
      />
      <img
        className={isSelected("var(--pink)") ? "isSelected" : ""}
        style={{
          zIndex: isSelected("var(--pink)") ? "1" : "0",
          filter: isSelected("var(--pink)")
            ? "drop-shadow(4px 4px 10px black)"
            : "grayscale(100%)",
        }}
        onClick={() => setColor("var(--pink)")}
        id="img4"
        src={pink}
        alt={"Samsung Galaxy S22 " + getColorName("var(--pink)")}
        title={"Samsung Galaxy S22 " + getColorName("var(--pink)")}
      />
    </div>
  );
};
