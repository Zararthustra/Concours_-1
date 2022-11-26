import { useState } from "react";
import { AddToCartButton } from "./AddToCartButton";
import { ColorPicker } from "./ColorPicker";
import { Details } from "./Details";
import { StrorageCapacity } from "./StrorageCapacity";

export const RightBloc = ({
  color,
  setColor,
  cartNumber,
  setCartNumber,
}) => {
  const [selectedStorage, setSelectedStorage] = useState(128);

  return (
    <div className="rightBloc">
      <ColorPicker color={color} setColor={setColor} />
      <StrorageCapacity
        selectedStorage={selectedStorage}
        setSelectedStorage={setSelectedStorage}
        color={color}
      />
      <p>{selectedStorage === 128 ? "599.00 €" : "649.00 €"}</p>
      <Details />
      <AddToCartButton
        color={color}
        cartNumber={cartNumber}
        setCartNumber={setCartNumber}
      />
    </div>
  );
};
