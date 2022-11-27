import { getContrast } from "../utils/getContrast";

export const StrorageCapacity = ({
  selectedStorage,
  setSelectedStorage,
  color,
}) => {
  return (
    <div className="strorageCapacity">
      <div
        className="movingBox"
        style={{
          backgroundColor: color,
          left: selectedStorage === 128 ? "0%" : "55%",
        }}
      />
      <div
        onClick={() => setSelectedStorage(128)}
        style={{
          fontWeight: selectedStorage === 128 && "600",
          color: selectedStorage === 128 && getContrast(color),
        }}
      >
        128 Go
      </div>
      <div
        onClick={() => setSelectedStorage(256)}
        style={{
          fontWeight: selectedStorage === 256 && "600",
          color: selectedStorage === 256 && getContrast(color),
        }}
      >
        256 Go
      </div>
    </div>
  );
};
