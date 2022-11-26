export const ColorBubble = ({ size, top, left, right, backgroundColor }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor,
        top,
        left,
        right,
        borderRadius: "50%",
        position: "absolute",
        zIndex: "-1",
        transition: "all .5s",
        animation: "fadeIn 1s ease-in"
      }}
    />
  );
};
