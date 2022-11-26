import { ModelTitle } from "./ModelTitle";
import { getImages } from "../utils/getImages";
import { getColorName } from "../utils/getColorName";
export const MidBloc = ({ color, selectedStorage }) => {
  return (
    <div className="midBloc">
      <ModelTitle color={color} selectedStorage={selectedStorage} />
      <div className="images">
        <img
          className="imgFull"
          src={getImages(color)[0]}
          alt={"Samsung S22 " + getColorName(color) + " en entier vue arrière"}
          title={
            "Samsung S22 " + getColorName(color) + " en entier vue arrière"
          }
        />
        <img
          className="imgCamera"
          src={getImages(color)[1]}
          alt={
            "Samsung S22 " +
            getColorName(color) +
            " focus sur la caméra arrière"
          }
          title={
            "Samsung S22 " +
            getColorName(color) +
            " focus sur la caméra arrière"
          }
        />
        <img
          className="imgSide"
          src={getImages(color)[2]}
          alt={"Samsung S22 " + getColorName(color) + " vue tranche épaisseur"}
          title={
            "Samsung S22 " + getColorName(color) + " vue tranche épaisseur"
          }
        />
      </div>
    </div>
  );
};
