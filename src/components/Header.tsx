import { useEffect } from "react";
import styled from "styled-components";

const Header = (props: { currentTab: string }) => {
  useEffect(() => {
    console.log(props.currentTab);
  }, [props.currentTab]);

  return (
    <Pub.Container>
      <ul className="tab-container">
        <li className="tab-red">RED</li>
        <li className="tab-orange">ORANGE</li>
        <li className="tab-yellow">YELLOW</li>
        <li className="tab-green">GREEN</li>
        <li className="tab-blue">BLUE</li>
        <li className="tab-navy">NAVY</li>
        <li className="tab-purple">PURPLE</li>
      </ul>
    </Pub.Container>
  );
};

export default Header;

const Pub = {
  Container: styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    background: #fff;

    & .tab-container {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;

      & .tab-red {
        background: red;
      }
      & .tab-orange {
        background: orange;
      }
      & .tab-yellow {
        background: yellow;
      }
      & .tab-green {
        background: green;
        color: #fff;
      }
      & .tab-blue {
        background: blue;
        color: #fff;
      }
      & .tab-navy {
        background: navy;
        color: #fff;
      }
      & .tab-purple {
        background: purple;
        color: #fff;
      }
    }
  `,
};
