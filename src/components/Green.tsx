import { MutableRefObject } from "react";
import styled from "styled-components";

const Green = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <Pub.Container
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[3] = el;
      }}
      id="GREEN"
    >
      Green
    </Pub.Container>
  );
};

export default Green;

const Pub = {
  Container: styled.div`
    height: 200vh;
    width: 100%;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: #fff;
  `,
};
