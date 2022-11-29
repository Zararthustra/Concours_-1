import green from "../assets/green/green0.png";
import black from "../assets/black/black0.png";
import white from "../assets/white/white0.png";
import pink from "../assets/pink/pink0.png";
import { getColorName } from "../utils/getColorName";
import { ColorBubble } from "./ColorBubble";
import { colors } from "../utils/colors";
import { getContrast } from "../utils/getContrast";

export const BlocA = ({ color, setColor, stopSlideShow, setStopSlideShow }) => {
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
        size={"60rem"}
        top={"-17rem"}
        left={"-15rem"}
        backgroundColor={color}
        zIndex={"-1"}
      />
      <div
        className="stopSlideShow"
        style={{
          position: "absolute",
          color: getContrast(color),
          top: "-3rem",
          left: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          onClick={() => setStopSlideShow(!stopSlideShow)}
          style={{
            cursor: "pointer",
          }}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {stopSlideShow ? (
            <path
              d="M15.875 30.0417C15.3195 30.4028 14.7567 30.4233 14.1867 30.1033C13.6178 29.7844 13.3334 29.2917 13.3334 28.625V11.375C13.3334 10.7083 13.6178 10.215 14.1867 9.895C14.7567 9.57611 15.3195 9.59722 15.875 9.95833L29.4584 18.5833C29.9584 18.9167 30.2084 19.3889 30.2084 20C30.2084 20.6111 29.9584 21.0833 29.4584 21.4167L15.875 30.0417Z"
              fill={getContrast(color)}
            />
          ) : (
            <path
              d="M13.3333 31.6667C15.1667 31.6667 16.6667 30.1667 16.6667 28.3333V11.6667C16.6667 9.83333 15.1667 8.33333 13.3333 8.33333C11.5 8.33333 10 9.83333 10 11.6667V28.3333C10 30.1667 11.5 31.6667 13.3333 31.6667ZM23.3333 11.6667V28.3333C23.3333 30.1667 24.8333 31.6667 26.6667 31.6667C28.5 31.6667 30 30.1667 30 28.3333V11.6667C30 9.83333 28.5 8.33333 26.6667 8.33333C24.8333 8.33333 23.3333 9.83333 23.3333 11.6667Z"
              fill={getContrast(color)}
            />
          )}
        </svg>
        {stopSlideShow ? (
          <p>Reprendre le défilement</p>
        ) : (
          <p>Arrêter le défilement</p>
        )}
      </div>
      <div className="colorName">
        <div className="relativeContainer">
          <h2
            style={{
              animation:
                "blackWink 5s ease-in infinite, slideFromLeft 2s ease-in-out",
            }}
          >
            {getColorName(color).toUpperCase()}
          </h2>
          <h2
            className="repetition"
            style={{
              left: "-1rem",
              top: "4rem",
              animation:
                "shadowComeAndGo 5s ease-in infinite, slideFromTop 3s ease-in-out",
            }}
          >
            {getColorName(color).toUpperCase()}
          </h2>
        </div>
      </div>
      <div className="smartphones">
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
