import { useCallback, useEffect, useRef } from "react";
import Header from "./components/Header";
import Red from "./components/Red";
import Orange from "./components/Orange";
import Yellow from "./components/Yellow";
import Green from "./components/Green";
import Blue from "./components/Blue";
import Navy from "./components/Navy";
import Purple from "./components/Purple";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

function App() {
  const redContainerRef = useRef<HTMLDivElement>(null);
  const orangeContainerRef = useRef<HTMLDivElement>(null);
  const yellowContainerRef = useRef<HTMLDivElement>(null);
  const greenContainerRef = useRef<HTMLDivElement>(null);
  const blueContainerRef = useRef<HTMLDivElement>(null);
  const navyContainerRef = useRef<HTMLDivElement>(null);
  const purpleContainerRef = useRef<HTMLDivElement>(null);

  const rainbowRefs = useRef<HTMLDivElement[] | null>([]);

  // const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
  //   console.log(entries);
  //   if (entries[0].isIntersecting) {
  //     console.log("hi");
  //   }
  // }, []);

  // useIntersectionObserver({
  //   callback: handleObserver,
  //   ref: redContainerRef,
  // });

  // useEffect(() => {
  //   console.log(rainbowRefs);
  // }, [rainbowRefs]);

  return (
    <>
      <Header />

      <div ref={(el) => (rainbowRefs.current[0] = el)} />

      <Red refs={rainbowRefs} />
      {/* <Orange refs={rainbowRefs} /> */}
      <Yellow ref={yellowContainerRef} />
      <Green ref={greenContainerRef} />
      <Blue ref={blueContainerRef} />
      <Navy ref={navyContainerRef} />
      <Purple ref={purpleContainerRef} />
    </>
  );
}

export default App;
