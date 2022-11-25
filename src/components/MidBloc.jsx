import { ModelTitle } from "./ModelTitle";
import { getImages } from "../utils/getImages";
import { getColorName } from "../utils/getColorName";
export const MidBloc = ({ color }) => {

  return (
    <div className="midBloc">
      <ModelTitle color={color} />
      <div className="images">
        <img
          className="imgFull"
          src={getImages(color)[0]}
          alt={"Samsung S22 " + getColorName(color)}
          title={"Samsung S22 " + getColorName(color)}
        />
        <img
          className="imgCamera"
          src={getImages(color)[1]}
          alt={"Samsung S22 " + getColorName(color)}
          title={"Samsung S22 " + getColorName(color)}
        />
        <img
          className="imgSide"
          src={getImages(color)[2]}
          alt={"Samsung S22 " + getColorName(color)}
          title={"Samsung S22 " + getColorName(color)}
        />
      </div>
    </div>
  );
};
