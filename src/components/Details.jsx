import { StrorageCapacity } from "./StrorageCapacity";

export const Details = ({ selectedStorage, setSelectedStorage, color }) => {
  return (
    <ul className="details">
      <li>
        <div>Prix</div>
        <div>{selectedStorage === 128 ? "599.00 €" : "649.00 €"}</div>
      </li>
      <li>
        <div>Capacité de stockage</div>
        <StrorageCapacity
          selectedStorage={selectedStorage}
          setSelectedStorage={setSelectedStorage}
          color={color}
        />
      </li>
      <li>
        <div>Système d'exploitation</div>
        <div>Android 12</div>
      </li>
      <li>
        <div>Ecran</div>
        <div>6,1" (15,5 cm)</div>
      </li>
      <li>
        <div>RAM</div>
        <div>8 Go</div>
      </li>
      <li>
        <div>Dual SIM</div>
        <div>Oui</div>
      </li>
      <li>
        <div>Processeur</div>
        <div>Exynos 2200</div>
      </li>
      <li>
        <div>Batterie</div>
        <div>3700 mAh</div>
      </li>
      <li>
        <div>Charge rapide</div>
        <div>Oui</div>
      </li>
    </ul>
  );
};
