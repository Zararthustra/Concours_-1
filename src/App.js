import { ColorBubble } from "./components/ColorBubble";
import { Navbar } from "./components/Navbar";
import { RightBloc } from "./components/RightBloc";
import { useState } from "react";
import { MidBloc } from "./components/MidBloc";

function App() {
  const [color, setColor] = useState("var(--green)");
  const [selectedStorage, setSelectedStorage] = useState(128);
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <>
      <Navbar color={color} cartNumber={cartNumber} />
      <ColorBubble
        size={"20rem"}
        top={"-6rem"}
        left={"-11.5rem"}
        backgroundColor={color}
      />
      <ColorBubble
        size={"20rem"}
        top={"-12rem"}
        right={"2.5rem"}
        backgroundColor={color}
      />
      <main>
        <div>Bloc 1</div>
        <MidBloc selectedStorage={selectedStorage} color={color} />
        <RightBloc
          selectedStorage={selectedStorage}
          setSelectedStorage={setSelectedStorage}
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
