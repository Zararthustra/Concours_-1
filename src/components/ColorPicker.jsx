import { ColorButton } from "./ColorButton";

export const ColorPicker = ({ color, setColor }) => {
  return (
    <div className="colorPicker">
      <ColorButton
        color={color}
        setColor={setColor}
        backgroundColor="var(--green)"
        colorName="Vert"
      />
      <ColorButton
        color={color}
        setColor={setColor}
        backgroundColor="var(--pink)"
        colorName="Rose"
      />
      <ColorButton
        color={color}
        setColor={setColor}
        backgroundColor="var(--white)"
        colorName="Blanc"
      />
      <ColorButton
        color={color}
        setColor={setColor}
        backgroundColor="var(--black)"
        colorName="Noir"
      />
    </div>
  );
};
