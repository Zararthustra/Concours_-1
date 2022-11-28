import { Navbar } from "./components/Navbar";
import { BlocC } from "./components/BlocC";
import { useState } from "react";
import { BlocB } from "./components/BlocB";
import { BlocA } from "./components/BlocA";
import { Header } from "./components/Header";

function App() {
  const [color, setColor] = useState("var(--green)");
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <>
      <Navbar color={color} cartNumber={cartNumber} />
      <Header color={color} />
      <main>
        <BlocA color={color} setColor={setColor} />
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
