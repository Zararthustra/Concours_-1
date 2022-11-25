import { getContrast } from "../utils/getContrast";

export const StrorageCapacity = ({
  selectedStorage,
  setSelectedStorage,
  color,
}) => {
  return (
    <div className="strorageCapacity">
      <div
        onClick={() => setSelectedStorage(128)}
        style={{
          outline: selectedStorage === 128 && "1px solid #888",
          fontWeight: selectedStorage === 128 && "600",
          backgroundColor: selectedStorage === 128 && color,
          color: selectedStorage === 128 && getContrast(color),
        }}
      >
        128 Go
      </div>
      <div
        onClick={() => setSelectedStorage(256)}
        style={{
          outline: selectedStorage === 256 && "1px solid #888",
          fontWeight: selectedStorage === 256 && "600",
          backgroundColor: selectedStorage === 256 && color,
          color: selectedStorage === 256 && getContrast(color),
        }}
      >
        256 Go
      </div>
    </div>
  );
};
