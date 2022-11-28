import { useState } from "react";
import { AddToCartButton } from "./AddToCartButton";
import { ColorPicker } from "./ColorPicker";
import { Details } from "./Details";

export const BlocC = ({ color, setColor, cartNumber, setCartNumber }) => {
  const [selectedStorage, setSelectedStorage] = useState(256);

  return (
    <div className="blocC">
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
