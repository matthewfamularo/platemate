import React, { Component, useRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import FocusTrap from "focus-trap-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import logo from "./logo.svg";
import Bar15 from "./assets/barbell-15.png";
import Bar20 from "./assets/barbell-20.png";
import Bar25 from "./assets/barbell-25.png";
import BarbellCollarImg from "./assets/barbell-collar.png";
import Check from "./assets/check.png";
import "react-spring-bottom-sheet/dist/style.css";
import styled from "styled-components";

import Plates from "./Components/Plates";
import BarbellSleeve from "./Components/BarbellSleeve";

const Wrapper = styled.div`
max-width: 480px !important;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding 24px 0 0 0;
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
  padding-bottom: 240px;
`;

const Weight = styled.div`
  padding: 0 24px;
  font-size: 120px;
  line-height: 120px;
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

const BottomContain = styled.div`
  position: sticky;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    360deg,
    rgb(11, 11, 11) 0%,
    rgba(20, 20, 20, 0) 100%,
    rgba(11, 11, 11, 0) 100%
  );
`;

const Bottom = styled.div`
  width: 100%;
`;

const ActionsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0 8px 0 0;
`;

const QuickActions = styled.div`
  display: flex;
  align-item: flex-end;
  background: #1c1c1c;
  border-radius: 4000px;
  border: 1px solid #2d2d2d;
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
  height: ${(props) => props.height || "auto"};
  display: flex;
  align-items: end;
  align-items: center;
`;

const BarbellCollar = styled.div`
  width: 90px;
  height: 80px;
  background: url(${BarbellCollarImg});
  background-size: cover;
`;

const BarbellWrap = styled.div`
  transform-origin: left center;
  transform: scale(0.9);
`;

const Bars = styled.div``;

const Bar = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #2d2d2d;
  img {
    width: 100%;
    padding-right: 16px;
  }
`;

const PlateSet = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #2d2d2d;
`;

const Radio = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 1000px;
  border: 2px solid ${(props) => (props.checked ? "white" : "#2d2d2d")};
  position: relative;
  // background: ${(props) => (props.checked ? "green" : "transparent")};
  &::after {
    content: " ";
    width: 24px;
    height: 24px;
    opacity: ${(props) => (props.checked ? "1" : "0")};
    background: url(${Check});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -2px;
    left: -2px;
  }
`;

const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 16px 8px 16px;
`;

const Label = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: white;
`;

let sheetRef;
let headerRef;
let initialHeight;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      bar: 45,
      mode: "lb",
      weights: [],
      weightsSorted: [],
      open: false,
      plates: "Rogue Bumpers",
    };
    this.updateWeight = this.updateWeight.bind(this);
    this.removeLast = this.removeLast.bind(this);
    this.changeBar = this.changeBar.bind(this);
    this.clear = this.clear.bind(this);
    this.sheetRef = React.createRef();
    this.headerRef = React.createRef();
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

  changeBar(weight) {
    this.setState({
      bar: weight,
    });
  }

  changePlates(plates) {
    this.setState({
      plates: plates,
    });
    this.clear();
  }

  render() {
    return (
      <Wrapper>
        <Weight onClick={this.removeLast}>
          {this.state.weight + this.state.bar}
          <Measure>lb</Measure>
        </Weight>
        <BarbellWrap>
          <Barbell height="320px">
            <BarbellCollar />
            <BarbellSleeve {...this.state} />
          </Barbell>
        </BarbellWrap>
        <BottomSheet
          open={true}
          blocking={true}
          snapPoints={({ headerHeight, maxHeight }) => [
            headerHeight,
            0.95 * maxHeight,
          ]}
          defaultSnap={({ lastSnap, snapPoints }) => {
            lastSnap ?? Math.max(...snapPoints);
          }}
          initialFocusRef={this.headerRef}
          scrollLocking={false}
          ref={this.sheetRef}
          onSpringStart={(event) => {
            let start = this.sheetRef.current.height;
            let end;
            if (event.type == "SNAP") {
              requestAnimationFrame(() => {
                end = this.sheetRef.current.height;
                if (start !== end) {
                  if (end < initialHeight) {
                    this.setState({
                      open: false,
                    });
                  } else {
                    this.setState({
                      open: true,
                    });
                  }
                }
              });
            }
          }}
          onSpringEnd={(event) => {
            if (event.type == "OPEN") {
              initialHeight = this.sheetRef.current.height;
              console.log("initial: " + initialHeight);
            }
          }}
          header={
            <>
              {!this.state.open && (
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
              )}
              <Bottom id="bottom">
                <Plates
                  lock
                  updateWeight={this.updateWeight}
                  {...this.state}
                  id="plates"
                />
              </Bottom>
            </>
          }
        >
          <Tabs>
            <TabList>
              <Tab>Plates</Tab>
              <Tab>Bars</Tab>
            </TabList>

            <TabPanel>
              <PlateSet onClick={() => this.changePlates("Rogue Bumpers")}>
                <ItemInfo>
                  <Label>Rogue Colored Plates</Label>
                  <Radio checked={this.state.plates == "Rogue Bumpers"} />
                </ItemInfo>
                <Plates plates="Rogue Bumpers" open={this.state.open} />
              </PlateSet>
              <PlateSet onClick={() => this.changePlates("Urethane")}>
                <ItemInfo>
                  <Label>Generic Urethane Plates</Label>
                  <Radio checked={this.state.plates == "Urethane"} />
                </ItemInfo>
                <Plates plates="Urethane" open={this.state.open} />
              </PlateSet>
            </TabPanel>
            <TabPanel>
              <Bars>
                <Bar weight={15} onClick={() => this.changeBar(33)}>
                  <ItemInfo>
                    <Label>15kg</Label>
                    <Radio checked={this.state.bar == 33} value={15} />
                  </ItemInfo>
                  <img src={Bar15} />
                </Bar>
                <Bar weight={20} onClick={() => this.changeBar(45)}>
                  <ItemInfo>
                    <Label>20kg</Label>
                    <Radio checked={this.state.bar == 45} value={20} />
                  </ItemInfo>
                  <img src={Bar20} />
                </Bar>
                <Bar weight={25} onClick={() => this.changeBar(55)}>
                  <ItemInfo>
                    <Label>25kg</Label>
                    <Radio checked={this.state.bar == 55} value={25} />
                  </ItemInfo>
                  <img src={Bar25} />
                </Bar>
              </Bars>
            </TabPanel>
          </Tabs>
        </BottomSheet>
      </Wrapper>
    );
  }
}

export default App;
