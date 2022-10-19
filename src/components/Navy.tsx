import { MutableRefObject } from "react";
import styled from "styled-components";

const Navy = (props: { refs: MutableRefObject<HTMLDivElement[]> }) => {
  return (
    <Pub.Container
      ref={(el) => {
        if (!el) {
          return;
        }
        props.refs.current[5] = el;
      }}
      id="NAVY"
    >
      Navy
    </Pub.Container>
  );
};

export default Navy;

const Pub = {
  Container: styled.div`
    height: 200vh;
    width: 100%;
    background: navy;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: #fff;
  `,
};
