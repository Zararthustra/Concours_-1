import { ColorBubble } from "./components/ColorBubble";
import { Navbar } from "./components/Navbar";
import { RightBloc } from "./components/RightBloc";
import { useState } from "react";
import { MidBloc } from "./components/MidBloc";

function App() {
  const [color, setColor] = useState("var(--green)");

  return (
    <>
      <Navbar color={color}/>
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
        <MidBloc color={color} />
        <RightBloc color={color} setColor={setColor} />
      </main>
    </>
  );
}

export default App;
