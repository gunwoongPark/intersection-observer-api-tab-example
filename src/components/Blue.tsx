import { MutableRefObject } from "react";
import styled from "styled-components";

const Blue = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <Pub.Container
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[4] = el;
      }}
      id="BLUE"
    >
      Blue
    </Pub.Container>
  );
};

export default Blue;

const Pub = {
  Container: styled.div`
    height: 200vh;
    width: 100%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: #fff;
  `,
};
