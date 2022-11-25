import { ColorButton } from "./ColorButton";

export const ColorPicker = () => {
  return (
    <div className="colorPicker">
      <ColorButton backgroundColor="var(--black)" colorName="Noir" />
      <ColorButton backgroundColor="var(--white)" colorName="Blanc" />
      <ColorButton backgroundColor="var(--green)" colorName="Vert" />
      <ColorButton backgroundColor="var(--pink)" colorName="Rose" />
    </div>
  );
};
