import { MutableRefObject } from "react";
import styled from "styled-components";

const Red = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <Pub.Container
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[0] = el;
      }}
      id="RED"
    >
      Red
    </Pub.Container>
  );
};

export default Red;

const Pub = {
  Container: styled.div`
    height: 200vh;
    width: 100%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
  `,
};
