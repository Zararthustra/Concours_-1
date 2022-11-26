import { AddToCartButton } from "./AddToCartButton";
import { ColorPicker } from "./ColorPicker";
import { Details } from "./Details";
import { StrorageCapacity } from "./StrorageCapacity";

export const RightBloc = ({
  color,
  setColor,
  selectedStorage,
  setSelectedStorage,
  cartNumber,
  setCartNumber,
}) => {
  return (
    <div className="rightBloc">
      <ColorPicker color={color} setColor={setColor} />
      <StrorageCapacity
        selectedStorage={selectedStorage}
        setSelectedStorage={setSelectedStorage}
        color={color}
      />
      <Details />
      <AddToCartButton
        color={color}
        cartNumber={cartNumber}
        setCartNumber={setCartNumber}
      />
    </div>
  );
};
