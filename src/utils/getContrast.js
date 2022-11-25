export const getContrast = (color) => {
    if (color === "var(--green)" || color === "var(--black)") return "white";
    return "#333"
}