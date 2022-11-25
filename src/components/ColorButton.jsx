export const ColorButton = ({ color, setColor, backgroundColor, colorName }) => {
  const isSelected = color === backgroundColor
  return (
    <div onClick={() => setColor(backgroundColor)} className="colorButton">
      <div
        className="color"
        style={{
          backgroundColor,
          outline: isSelected && "1px solid black"
        }}
      />
      <p
      style={{
        fontWeight: isSelected && "600"
      }}>{colorName}</p>
    </div>
  );
};
