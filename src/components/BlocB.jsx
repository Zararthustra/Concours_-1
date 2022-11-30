import { getImages } from "../utils/getImages";
import { getColorName } from "../utils/getColorName";
import { useEffect, useRef } from "react";

export const BlocB = ({ color, stopSlideShow }) => {
  const topDownRef = useRef();
  const bottomUpRef = useRef();
  const sideSlideRef = useRef();

  // Reset animations
  useEffect(() => {
    let topDown = topDownRef;
    let bottomUp = bottomUpRef;
    let sideSlide = sideSlideRef;

    if (stopSlideShow)
      return () => {
        topDown.current.style.animation = "none";
        bottomUp.current.style.animation = "none";
        sideSlide.current.style.animation = "none";
      };

    setTimeout(() => {
      topDown.current &&
        (topDown.current.style.animation = "topDown 5s linear infinite");
      bottomUp.current &&
        (bottomUp.current.style.animation = "bottomUp 5s linear infinite");
      sideSlide.current &&
        (sideSlide.current.style.animation = "sideSlide 5s linear infinite");
    }, 0);

    return () => {
      topDown.current && (topDown.current.style.animation = "none");
      bottomUp.current && (bottomUp.current.style.animation = "none");
      sideSlide.current && (sideSlide.current.style.animation = "none");
    };
  }, [color, stopSlideShow]);

  return (
    <div className="blocB">
      <img
        className="imgSide"
        ref={sideSlideRef}
        src={getImages(color)[2]}
        alt={
          "Samsung Galaxy S22 " + getColorName(color) + " vue tranche épaisseur"
        }
        title={
          "Samsung Galaxy S22 " + getColorName(color) + " vue tranche épaisseur"
        }
      />
      <img
        className="imgFull"
        ref={topDownRef}
        src={getImages(color)[0]}
        alt={
          "Samsung Galaxy S22 " + getColorName(color) + " en entier vue arrière"
        }
        title={
          "Samsung Galaxy S22 " + getColorName(color) + " en entier vue arrière"
        }
      />
      <img
        className="imgCamera"
        ref={bottomUpRef}
        src={getImages(color)[1]}
        alt={
          "Samsung Galaxy S22 " +
          getColorName(color) +
          " focus sur la caméra arrière"
        }
        title={
          "Samsung Galaxy S22 " +
          getColorName(color) +
          " focus sur la caméra arrière"
        }
      />
    </div>
  );
};
