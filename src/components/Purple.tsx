import { MutableRefObject } from "react";
import styled from "styled-components";

const Purple = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <Pub.Container
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[6] = el;
      }}
      id="PURPLE"
    >
      Purple
    </Pub.Container>
  );
};

export default Purple;

const Pub = {
  Container: styled.div`
    height: 200vh;
    width: 100%;
    background: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: #fff;
  `,
};
