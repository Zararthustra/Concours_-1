import { ColorBubble } from "./components/ColorBubble";
import { Navbar } from "./components/Navbar";
import { RightBloc } from "./components/RightBloc";

function App() {
  return (
    <>
      <Navbar />
      <ColorBubble
        size={"20rem"}
        top={"-6rem"}
        left={"-11.5rem"}
        backgroundColor={"#556E6B"}
      />
      <ColorBubble
        size={"20rem"}
        top={"-12rem"}
        right={"2.5rem"}
        backgroundColor={"#556E6B"}
      />
      <main>
        <div>Bloc 1</div>
        <div>Bloc 2</div>
        <RightBloc />
      </main>
    </>
  );
}

export default App;
