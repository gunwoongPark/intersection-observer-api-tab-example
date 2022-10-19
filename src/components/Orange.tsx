import { MutableRefObject } from "react";
import styled from "styled-components";

const Orange = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <Pub.Container
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[1] = el;
      }}
      id="ORANGE"
    >
      Orange
    </Pub.Container>
  );
};

export default Orange;

const Pub = {
  Container: styled.div`
    height: 200vh;
    width: 100%;
    background: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
  `,
};
