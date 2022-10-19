import { MutableRefObject, useEffect } from "react";

const useIntersectionObserver = ({
  callback,
  refs,
}: {
  callback: (entries: IntersectionObserverEntry[]) => void;
  refs: MutableRefObject<HTMLDivElement[]>;
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, { threshold: 0.25 });

    if (!!refs.current.length) {
      console.log(refs);
      refs.current.forEach((ref) => observer.observe(ref));
    }

    return () => observer && observer.disconnect();
  }, [callback, refs]);
};

export default useIntersectionObserver;
