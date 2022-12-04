export const ColorButton = ({ color, setColor, backgroundColor, colorName }) => {
  const isSelected = color === backgroundColor
  return (
    <div onClick={() => setColor(backgroundColor)} className="colorButton">
      <p
      style={{
        fontWeight: isSelected && "600"
      }}>{colorName}</p>
      <div
        className="color"
        style={{
          backgroundColor,
          width: isSelected ? "100%" : ".8rem",
        }}
        />
    </div>
  );
};
