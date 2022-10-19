import { useCallback, useRef } from "react";
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
  const rainbowRefs = useRef<HTMLDivElement[]>([]);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    console.log(entries.find((entry) => entry.isIntersecting));
  }, []);

  useIntersectionObserver({
    callback: handleObserver,
    refs: rainbowRefs,
  });

  return (
    <>
      <Header />
      <Red refs={rainbowRefs} />
      <Orange refs={rainbowRefs} />
      <Yellow refs={rainbowRefs} />
      <Green refs={rainbowRefs} />
      <Blue refs={rainbowRefs} />
      <Navy refs={rainbowRefs} />
      <Purple refs={rainbowRefs} />
    </>
  );
}

export default App;
