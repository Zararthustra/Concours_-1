export const ColorBubble = ({
  className,
  size,
  top,
  bottom,
  left,
  right,
  zIndex,
  backgroundColor,
}) => {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        backgroundColor,
        top,
        bottom,
        left,
        right,
        borderRadius: "50%",
        position: "absolute",
        zIndex: zIndex,
        transition: "all .5s",
        animation: "bubbleFadeIn 4s ease-in",
        opacity: "1",
      }}
    />
  );
};
