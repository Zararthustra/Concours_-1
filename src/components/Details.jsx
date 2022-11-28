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
        <div>Taille de l'écran</div>
        <div>6,1 pouces (15,5 cm)</div>
      </li>
      <li>
        <div>Définition de l'écran</div>
        <div>2340 x 1080 px</div>
      </li>
      <li>
        <div>Caméras arrière</div>
        <div>50 Mpx, 10 Mpx, 12 Mpx</div>
      </li>
      <li>
        <div>Caméra avant</div>
        <div>10 Mpx</div>
      </li>
      <li>
        <div>Poids</div>
        <div>167 g</div>
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
      <li>
        <div>Date de sortie</div>
        <div>11/03/2022</div>
      </li>
    </ul>
  );
};
