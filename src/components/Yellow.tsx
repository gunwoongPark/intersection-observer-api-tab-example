import { MutableRefObject } from "react";
import styled from "styled-components";

const Yellow = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <Pub.Container
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[2] = el;
      }}
      id="YELLOW"
    >
      Yellow
    </Pub.Container>
  );
};

export default Yellow;

const Pub = {
  Container: styled.div`
    height: 200vh;
    width: 100%;
    background: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
  `,
};
