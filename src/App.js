import { ColorBubble } from "./components/ColorBubble";
import { Navbar } from "./components/Navbar";
import { RightBloc } from "./components/RightBloc";
import { useState } from "react";
import { MidBloc } from "./components/MidBloc";
import { LeftBloc } from "./components/LeftBloc";
import { ModelTitle } from "./components/ModelTitle";

function App() {
  const [color, setColor] = useState("var(--green)");
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <>
      <Navbar color={color} cartNumber={cartNumber} />
      <ColorBubble
        size={"20rem"}
        top={"-6rem"}
        left={"-8rem"}
        backgroundColor={color}
      />
      <ColorBubble
        size={"20rem"}
        top={"-12rem"}
        right={"2.5rem"}
        backgroundColor={color}
      />
      <ColorBubble
        className="bigCenterColorBubble"
        size={"40vw"}
        top={"20rem"}
        left={"8vw"}
        backgroundColor={color}
      />
      <ModelTitle color={color} />
      <main>
        <LeftBloc color={color} setColor={setColor} />
        <MidBloc color={color} />
        <RightBloc
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
