import { useEffect } from "react";
import styled from "styled-components";

const Header = (props: { currentTab: string }) => {
  useEffect(() => {
    console.log(props.currentTab);
  }, [props.currentTab]);

  return (
    <Pub.Container>
      <ul className="tab-container">
        <li className={`tab red ${props.currentTab === "RED" ? "active" : ""}`}>
          RED
        </li>
        <li
          className={`tab orange ${
            props.currentTab === "ORANGE" ? "active" : ""
          }`}
        >
          ORANGE
        </li>
        <li
          className={`tab yellow ${
            props.currentTab === "YELLOW" ? "active" : ""
          }`}
        >
          YELLOW
        </li>
        <li
          className={`tab green ${
            props.currentTab === "GREEN" ? "active" : ""
          }`}
        >
          GREEN
        </li>
        <li
          className={`tab blue ${props.currentTab === "BLUE" ? "active" : ""}`}
        >
          BLUE
        </li>
        <li
          className={`tab navy ${props.currentTab === "NAVY" ? "active" : ""}`}
        >
          NAVY
        </li>
        <li
          className={`tab purple ${
            props.currentTab === "PURPLE" ? "active" : ""
          }`}
        >
          PURPLE
        </li>
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

      & .tab {
        &.active {
          border-bottom: 2.5px solid black;
        }

        &.red {
          background: red;
        }
        &.orange {
          background: orange;
        }
        &.yellow {
          background: yellow;
        }
        &.green {
          background: green;
          color: #fff;
        }
        &.blue {
          background: blue;
          color: #fff;
        }
        &.navy {
          background: navy;
          color: #fff;
        }
        &.purple {
          background: purple;
          color: #fff;
        }
      }
    }
  `,
};
