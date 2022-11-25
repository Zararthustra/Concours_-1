export const ColorButton = ({ backgroundColor, colorName }) => {
  return (
    <div className="colorButton">
      <div
        className="color"
        style={{
          backgroundColor,
        }}
      />
      <p>{colorName}</p>
    </div>
  );
};
