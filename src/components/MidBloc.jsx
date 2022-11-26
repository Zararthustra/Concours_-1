import { getImages } from "../utils/getImages";
import { getColorName } from "../utils/getColorName";

export const MidBloc = ({ color }) => {
  return (
    <div className="midBloc">
      <img
        className="imgFull"
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
      <img
        className="imgSide"
        src={getImages(color)[2]}
        alt={
          "Samsung Galaxy S22 " + getColorName(color) + " vue tranche épaisseur"
        }
        title={
          "Samsung Galaxy S22 " + getColorName(color) + " vue tranche épaisseur"
        }
      />
    </div>
  );
};
