import React, { Component } from "react";
import logo from "./logo.svg";
import BarbellRightImg from "./assets/barbell-right.png";
import BarbellLeftImg from "./assets/barbell-left.png";
import Plate2Half from "./assets/plate-2.5.png";
import Plate5 from "./assets/plate-5.png";
import Plate10 from "./assets/plate-10.png";
import Plate25 from "./assets/plate-25.png";
import Plate35 from "./assets/plate-35.png";
import Plate45 from "./assets/plate-45.png";
import Plate55 from "./assets/plate-55.png";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 410px;
  height: 100%;
  max-height: 100%;
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
  max-height: -moz-available;
  max-height: -webkit-fill-available;
  max-height: fill-available;
  color: white;
  background: #0b0b0b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Weight = styled.div`
  padding: 0 24px;
  font-size: 140px;
  line-height: 140px;
  font-weight: 700;
  letter-spacing: -0.02em;
  position: sticky;
  top: 24px;
`;

const Measure = styled.span`
  font-size: 24px;
  line-height: 32px;
  color: #929292;
  letter-spacing: 0;
`;

const Plate = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  flex: 0 0 ${(props) => props.size}px;
  display: flex;
  border-radius: 40000px;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

const Skrim = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 24px;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    270deg,
    #0b0b0b 0%,
    rgba(20, 20, 20, 0) 100%,
    rgba(11, 11, 11, 0) 100%
  );
`;

const BottomContain = styled.div`
  position: sticky;
  bottom: 0px;
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  width: 100%;
`;

const Plates = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  align-items: center;
  padding: 0 24px;
  height: auto;
`;

const ActionsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const QuickActions = styled.div`
  display: flex;
  align-item: flex-end;
  background: #1c1c1c;
  border-radius: 4000px;
  border: 1px solid #2d2d2d;
  padding: 0 2px;
`;

const Undo = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Clear = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #2d2d2d;
`;

const Barbell = styled.div`
  width: 100%;
  max-width: 100%;
  height: 320px;
  display: flex;
  align-items: end;
  align-items: center;
`;

const BarbellRight = styled.div`
  width: 61px;
  height: 64px;
  background: url(${BarbellRightImg});
  background-size: cover;
`;

const BarbellLeft = styled.div`
  width: 100%;
  height: 321px;
  background: url(${BarbellLeftImg});
  background-size: 100%;
  background-position: center right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: end;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
    };
    this.updateWeight = this.updateWeight.bind(this);
    this.removeLast = this.removeLast.bind(this);
    this.clear = this.clear.bind(this);
  }

  componentDidMount() {
    this.setState({
      weight: 0,
      bar: 45,
      weights: [],
      weightsSorted: [],
    });
  }

  updateWeight(which, howMuch) {
    var arr = [];
    var calc;
    arr = this.state.weights;
    var sorted;
    if (which == "+") {
      arr.push(howMuch);
      sorted = [...arr].sort(function (a, b) {
        return a - b;
      });
      calc = arr.reduce((a, b) => a + b);
      calc = calc * 2;
      this.setState((prevState) => ({
        weight: calc,
        weights: arr,
        weightsSorted: sorted,
      }));
    }
  }

  removeLast() {
    var last = this.state.weights;
    var arr = [];
    var calc;
    last.pop();
    var sorted = [...last].sort(function (a, b) {
      return a - b;
    });
    if (last.length > 0) {
      arr = last;
      calc = [...arr].reduce((a, b) => a + b);
      calc = calc * 2;
    } else {
      arr = [];
      calc = 0;
    }
    this.setState({
      weights: arr,
      weight: calc,
      weightsSorted: sorted,
    });
  }

  clear() {
    this.setState({
      weights: [],
      weight: 0,
      weightsSorted: [],
    });
  }

  render() {
    return (
      <Wrapper>
        <Weight onClick={this.removeLast}>
          {this.state.weight + this.state.bar}
          <Measure>lb</Measure>
        </Weight>
        <div>
          <Barbell>
            <BarbellLeft>
              {this.state.weights &&
                this.state.weights.map(
                  (item) =>
                    (item == "2.5" && (
                      <svg
                        width="16"
                        height="97"
                        viewBox="0 0 16 97"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="16" height="97" rx="8" fill="#44C030" />
                        <rect
                          x="1"
                          y="1"
                          width="14"
                          height="95"
                          rx="7"
                          stroke="#0D0D0D"
                          stroke-opacity="0.5"
                          stroke-width="2"
                        />
                      </svg>
                    )) ||
                    (item == "5" && (
                      <svg
                        width="16"
                        height="145"
                        viewBox="0 0 16 145"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="16" height="145" rx="8" fill="#4B63E3" />
                        <rect
                          x="1"
                          y="1"
                          width="14"
                          height="143"
                          rx="7"
                          stroke="#0D0D0D"
                          stroke-opacity="0.5"
                          stroke-width="2"
                        />
                      </svg>
                    )) ||
                    (item == "10" && (
                      <svg
                        width="16"
                        height="321"
                        viewBox="0 0 16 321"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="16" height="321" rx="8" fill="#373739" />
                        <rect
                          x="1"
                          y="1"
                          width="14"
                          height="319"
                          rx="7"
                          stroke="#505050"
                          stroke-opacity="0.5"
                          stroke-width="2"
                        />
                      </svg>
                    )) ||
                    (item == "25" && (
                      <svg
                        width="32"
                        height="321"
                        viewBox="0 0 32 321"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="32" height="321" rx="10" fill="#44C030" />
                        <rect
                          x="1"
                          y="1"
                          width="30"
                          height="319"
                          rx="9"
                          stroke="#0D0D0D"
                          stroke-opacity="0.5"
                          stroke-width="2"
                        />
                      </svg>
                    )) ||
                    (item == "35" && (
                      <svg
                        width="40"
                        height="321"
                        viewBox="0 0 40 321"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="321" rx="10" fill="#BFC21E" />
                        <rect
                          x="1"
                          y="1"
                          width="38"
                          height="319"
                          rx="9"
                          stroke="#0D0D0D"
                          stroke-opacity="0.5"
                          stroke-width="2"
                        />
                      </svg>
                    )) ||
                    (item == "45" && (
                      <svg
                        width="48"
                        height="321"
                        viewBox="0 0 48 321"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="48" height="321" rx="10" fill="#4B63E3" />
                        <rect
                          x="1"
                          y="1"
                          width="46"
                          height="319"
                          rx="9"
                          stroke="#0D0D0D"
                          stroke-opacity="0.5"
                          stroke-width="2"
                        />
                      </svg>
                    )) ||
                    (item == "55" && (
                      <svg
                        width="56"
                        height="321"
                        viewBox="0 0 56 321"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="56" height="321" rx="10" fill="#DA4F22" />
                        <rect
                          x="1"
                          y="1"
                          width="54"
                          height="319"
                          rx="9"
                          stroke="#0D0D0D"
                          stroke-opacity="0.5"
                          stroke-width="2"
                        />
                      </svg>
                    ))
                )}
            </BarbellLeft>
            <BarbellRight />
          </Barbell>
        </div>
        <BottomContain>
          <Bottom>
            <Plates>
              <Plate
                bg="green"
                size="107"
                onClick={() => this.updateWeight("+", 2.5)}
              >
                <img src={Plate2Half} />
              </Plate>
              <Plate
                bg="blue"
                size="117"
                onClick={() => this.updateWeight("+", 5)}
              >
                <img src={Plate5} />
              </Plate>
              <Plate
                bg="gray"
                size="159"
                onClick={() => this.updateWeight("+", 10)}
              >
                <img src={Plate10} />
              </Plate>
              <Plate
                bg="green"
                size="159"
                onClick={() => this.updateWeight("+", 25)}
              >
                <img src={Plate25} />
              </Plate>
              <Plate
                bg="yellow"
                size="159"
                onClick={() => this.updateWeight("+", 35)}
              >
                <img src={Plate35} />
              </Plate>
              <Plate
                bg="blue"
                size="159"
                onClick={() => this.updateWeight("+", 45)}
              >
                <img src={Plate45} />
              </Plate>
              <Plate
                bg="red"
                size="159"
                onClick={() => this.updateWeight("+", 55)}
              >
                <img src={Plate55} />
              </Plate>
            </Plates>
            <Skrim />
          </Bottom>
          <ActionsWrap>
            <QuickActions>
              <Clear onClick={this.clear}>
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_47_1312)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.3358 0.659759C11.788 0.97689 11.8974 1.60052 11.5803 2.05268L10.4875 3.61079C14.4097 3.59655 18.0005 6.08487 19.0403 9.96539C20.2886 14.6241 17.3494 19.3835 12.5882 20.6593C7.82702 21.935 2.90191 19.2829 1.6536 14.6241C1.08197 12.4908 1.39208 10.3247 2.35445 8.48945C2.61093 8.00033 3.21536 7.81174 3.70448 8.06822C4.19359 8.3247 4.38218 8.92912 4.1257 9.41824C3.38239 10.8358 3.15154 12.4871 3.58545 14.1065C4.52689 17.62 8.29628 19.7387 12.0706 18.7274C15.8448 17.7161 18.0499 13.9965 17.1084 10.483C16.3061 7.48892 13.4502 5.50769 10.2877 5.61321L12.1483 7.7997C12.5062 8.22031 12.4554 8.85143 12.0347 9.20935C11.6141 9.56727 10.983 9.51644 10.6251 9.09583L7.10165 4.9552L9.94289 0.904244C10.26 0.452087 10.8837 0.342627 11.3358 0.659759Z"
                      fill="#929292"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_47_1312">
                      <rect
                        width="19"
                        height="21"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Clear>
              <Undo onClick={this.removeLast}>
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.07324e-07 6.00012L3.60424 0.455135C3.90523 -0.00792403 4.52462 -0.139308 4.98767 0.16168C5.45073 0.462669 5.58212 1.08205 5.28113 1.54511L3.03537 5.00012L11.1927 5.00012L11.1927 5.97944C11.1927 5.00012 11.1923 5.00012 11.1927 5.00012L11.1967 5.00013L11.2027 5.00016L11.2199 5.00033C11.2338 5.00051 11.2525 5.00084 11.2755 5.00145C11.3216 5.00268 11.3854 5.00504 11.4646 5.00956C11.6226 5.01859 11.8433 5.03635 12.1061 5.07139C12.6266 5.14079 13.3383 5.28132 14.0641 5.57164C14.7877 5.8611 15.572 6.31822 16.1797 7.04743C16.8021 7.79435 17.1927 8.77238 17.1927 10.0001C17.1927 11.2279 16.8021 12.2059 16.1797 12.9528C15.572 13.682 14.7877 14.1391 14.0641 14.4286C13.3383 14.7189 12.6266 14.8595 12.1061 14.9289C11.8433 14.9639 11.6226 14.9817 11.4646 14.9907C11.3854 14.9952 11.3216 14.9976 11.2755 14.9988C11.2524 14.9994 11.2338 14.9997 11.2199 14.9999L11.2027 15.0001L11.1967 15.0001L11.1945 15.0001C11.1941 15.0001 11.1927 15.0001 11.1927 14.0001L11.1927 15.0001C10.6404 15.0001 10.1927 14.5524 10.1927 14.0001C10.1927 13.4487 10.639 13.0015 11.1901 13.0001C11.1907 13.0001 11.1914 13.0001 11.192 13.0001L11.1941 13.0001L11.2222 12.9995C11.2494 12.9988 11.2929 12.9972 11.3505 12.9939C11.4659 12.9873 11.6359 12.9738 11.8418 12.9464C12.2588 12.8908 12.7971 12.7813 13.3213 12.5717C13.8477 12.3611 14.3134 12.0682 14.6432 11.6724C14.9583 11.2944 15.1927 10.7724 15.1927 10.0001C15.1927 9.22786 14.9583 8.70588 14.6432 8.3278C14.3134 7.93201 13.8477 7.63914 13.3213 7.42859C12.7971 7.21892 12.2588 7.10945 11.8418 7.05385C11.6359 7.02639 11.4659 7.0129 11.3505 7.00631C11.2929 7.00302 11.2494 7.00147 11.2222 7.00074L11.1941 7.00016L11.192 7.00012L11.1905 7.00012L3.03537 7.00012L5.28113 10.4551C5.58212 10.9182 5.45073 11.5376 4.98767 11.8386C4.52461 12.1396 3.90523 12.0082 3.60424 11.5451L1.07324e-07 6.00012Z"
                    fill="#929292"
                  />
                </svg>
              </Undo>
            </QuickActions>
          </ActionsWrap>
        </BottomContain>
      </Wrapper>
    );
  }
}

export default App;
