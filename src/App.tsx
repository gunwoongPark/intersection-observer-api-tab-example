import { useRef } from "react";
import Header from "./components/Header";
import Red from "./components/Red";
import Orange from "./components/Orange";
import Yellow from "./components/Yellow";
import Green from "./components/Green";
import Blue from "./components/Blue";
import Navy from "./components/Navy";
import Purple from "./components/Purple";

function App() {
  const redContainerRef = useRef<HTMLDivElement>(null);
  const orangeContainerRef = useRef<HTMLDivElement>(null);
  const yellowContainerRef = useRef<HTMLDivElement>(null);
  const greenContainerRef = useRef<HTMLDivElement>(null);
  const blueContainerRef = useRef<HTMLDivElement>(null);
  const navyContainerRef = useRef<HTMLDivElement>(null);
  const purpleContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />

      <Red ref={redContainerRef} />
      <Orange ref={orangeContainerRef} />
      <Yellow ref={yellowContainerRef} />
      <Green ref={greenContainerRef} />
      <Blue ref={blueContainerRef} />
      <Navy ref={navyContainerRef} />
      <Purple ref={purpleContainerRef} />
    </>
  );
}

export default App;
