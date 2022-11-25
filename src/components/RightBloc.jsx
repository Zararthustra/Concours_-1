import { useState } from "react";
import { AddToCartButton } from "./AddToCartButton";
import { ColorPicker } from "./ColorPicker";
import { Details } from "./Details";
import { StrorageCapacity } from "./StrorageCapacity";

export const RightBloc = ({ color, setColor }) => {
  const [selectedStorage, setSelectedStorage] = useState(128);
  return (
    <div className="rightBloc">
      <ColorPicker color={color} setColor={setColor} />
      <StrorageCapacity
        selectedStorage={selectedStorage}
        setSelectedStorage={setSelectedStorage}
        color={color}
      />
      <Details />
      <AddToCartButton color={color} />
    </div>
  );
};
