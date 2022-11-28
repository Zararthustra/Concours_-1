import { useState } from "react";
import { AddToCartButton } from "./AddToCartButton";
import { ColorPicker } from "./ColorPicker";
import { Details } from "./Details";

export const RightBloc = ({ color, setColor, cartNumber, setCartNumber }) => {
  const [selectedStorage, setSelectedStorage] = useState(256);

  return (
    <div className="rightBloc">
      <ColorPicker color={color} setColor={setColor} />
      <Details
        selectedStorage={selectedStorage}
        setSelectedStorage={setSelectedStorage}
        color={color}
      />
      <AddToCartButton
        color={color}
        cartNumber={cartNumber}
        setCartNumber={setCartNumber}
      />
    </div>
  );
};
