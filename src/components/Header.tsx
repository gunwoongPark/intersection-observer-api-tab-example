import { MutableRefObject } from "react";
import styled from "styled-components";

const Header = (props: {
  currentTab: string;
  refs: MutableRefObject<HTMLDivElement[]>;
}) => {
  return (
    <Pub.Container>
      <ul className="tab-container">
        <li
          className={`tab red${props.currentTab === "RED" ? " active" : ""}`}
          onClick={() => props.refs.current[0].scrollIntoView()}
        >
          RED
        </li>
        <li
          className={`tab orange${
            props.currentTab === "ORANGE" ? " active" : ""
          }`}
          onClick={() => props.refs.current[1].scrollIntoView()}
        >
          ORANGE
        </li>
        <li
          className={`tab yellow${
            props.currentTab === "YELLOW" ? " active" : ""
          }`}
          onClick={() => props.refs.current[2].scrollIntoView()}
        >
          YELLOW
        </li>
        <li
          className={`tab green${
            props.currentTab === "GREEN" ? " active" : ""
          }`}
          onClick={() => props.refs.current[3].scrollIntoView()}
        >
          GREEN
        </li>
        <li
          className={`tab blue${props.currentTab === "BLUE" ? " active" : ""}`}
          onClick={() => props.refs.current[4].scrollIntoView()}
        >
          BLUE
        </li>
        <li
          className={`tab navy${props.currentTab === "NAVY" ? " active" : ""}`}
          onClick={() => props.refs.current[5].scrollIntoView()}
        >
          NAVY
        </li>
        <li
          className={`tab purple${
            props.currentTab === "PURPLE" ? " active" : ""
          }`}
          onClick={() => props.refs.current[6].scrollIntoView()}
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
        padding: 14px;
        cursor: pointer;
        &.active {
          border: 4px solid black;
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
