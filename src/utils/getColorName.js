export const getColorName = (color) => {
  switch (color) {
    case "var(--green)":
      return "vert";
    case "var(--black)":
      return "noir";
    case "var(--white)":
      return "blanc";
    case "var(--pink)":
      return "rose";

    default:
      return;
  }
};
