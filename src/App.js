import { Navbar } from "./components/Navbar";
import { BlocC } from "./components/BlocC";
import { useEffect, useState } from "react";
import { BlocB } from "./components/BlocB";
import { BlocA } from "./components/BlocA";
import { Header } from "./components/Header";
import { colors } from "./utils/colors";

function App() {
  const [colorsIndex, setcolorsIndex] = useState(0);
  const [color, setColor] = useState(colors[colorsIndex]);
  const [cartNumber, setCartNumber] = useState(0);

  useEffect(() => {
    console.log(color, "Waiting for", colorsIndex, colors[colorsIndex]);
    const timer = setTimeout(() => {
      setColor(colors[colorsIndex]);
      console.log("processed", colorsIndex, colors[colorsIndex]);
    }, 10000);
    return () => {
      setcolorsIndex(colorsIndex + 1 > 3 ? 0 : colorsIndex + 1);
      console.log('return', colorsIndex, colors[colorsIndex]);
      clearTimeout(timer);
    };
  }); //<===

  return (
    <>
      <Navbar cartNumber={cartNumber} />
      <Header color={color} />
      <main>
        <BlocA color={color} setColor={setColor} colorsIndex={colorsIndex} setcolorsIndex={setcolorsIndex}/>
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
