import { Navbar } from "./components/Navbar";
import { BlocC } from "./components/BlocC";
import { useEffect, useState } from "react";
import { BlocB } from "./components/BlocB";
import { BlocA } from "./components/BlocA";
import { Header } from "./components/Header";
import { colors } from "./utils/colors";

function App() {
  const [color, setColor] = useState("var(--green)");
  const [cartNumber, setCartNumber] = useState(0);
  const [stopSlideShow, setStopSlideShow] = useState(false);

  const getNextColor = (currentColor) => {
    const currentIndex = colors.findIndex((item) => item === currentColor);
    const newColor = colors[currentIndex + 1 > 3 ? 0 : currentIndex + 1];
    setColor(newColor);
  };

  useEffect(() => {
    if (!stopSlideShow) {
      const timer = setTimeout(() => {
        getNextColor(color);
      }, 5000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <>
      <Navbar cartNumber={cartNumber} />
      <Header color={color} />
      <main>
        <BlocA
          color={color}
          setColor={setColor}
          stopSlideShow={stopSlideShow}
          setStopSlideShow={setStopSlideShow}
        />
        <BlocB color={color} />
        <BlocC
          color={color}
          setColor={setColor}
          cartNumber={cartNumber}
          setCartNumber={setCartNumber}
        />
      </main>
    </>
  );
}

export default App;
