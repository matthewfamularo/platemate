import React, { Component } from "react";
import styled from "styled-components";

import BarbellSleeveImg from "../assets/barbell-sleeve-20.png";
import BarbellSleeve15Img from "../assets/barbell-sleeve-15.png";
import BarbellSleeve25Img from "../assets/barbell-sleeve-25.png";

const handleBarbellSleeve = (weight) => {
  switch (weight) {
    case 25:
    case 55:
      return BarbellSleeve25Img;
    case 15:
    case 33:
      return BarbellSleeve15Img;
    default:
      return BarbellSleeveImg;
  }
};

const handlePlates = (plates, weight) => {
  if (weight == 2.5) {
    if (plates == "Rogue Bumpers") {
      return (
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
      );
    } else if (plates == "Urethane") {
      return (
        <svg
          width="20"
          height="96"
          viewBox="0 0 20 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_61_13749)">
            <rect width="20" height="96" rx="4" fill="#373739" />
            <rect
              x="1"
              y="1"
              width="18"
              height="94"
              rx="3"
              stroke="#0D0D0D"
              stroke-opacity="0.5"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_61_13749">
              <rect width="20" height="96" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
  } else if (weight == 5) {
    if (plates == "Rogue Bumpers") {
      return (
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
      );
    } else if (plates == "Urethane") {
      return (
        <svg
          width="24"
          height="120"
          viewBox="0 0 24 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_61_13758)">
            <rect width="24" height="120" rx="4" fill="#373739" />
            <rect
              x="1"
              y="1"
              width="22"
              height="118"
              rx="3"
              stroke="#0D0D0D"
              stroke-opacity="0.5"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_61_13758">
              <rect width="24" height="120" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
  } else if (weight == 10) {
    if (plates == "Rogue Bumpers") {
      return (
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
      );
    } else if (plates == "Urethane") {
      return (
        <svg
          width="28"
          height="144"
          viewBox="0 0 28 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_65_13767)">
            <rect width="28" height="144" rx="4" fill="#373739" />
            <rect
              x="1"
              y="1"
              width="26"
              height="142"
              rx="3"
              stroke="#0D0D0D"
              stroke-opacity="0.5"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_65_13767">
              <rect width="28" height="144" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
  } else if (weight == 25) {
    if (plates == "Rogue Bumpers") {
      return (
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
      );
    } else if (plates == "Urethane") {
      return (
        <svg
          width="32"
          height="168"
          viewBox="0 0 32 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_65_13771)">
            <rect width="32" height="168" rx="4" fill="#373739" />
            <rect
              x="1"
              y="1"
              width="30"
              height="166"
              rx="3"
              stroke="#0D0D0D"
              stroke-opacity="0.5"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_65_13771">
              <rect width="32" height="168" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
  } else if (weight == 35) {
    if (plates == "Rogue Bumpers") {
      return (
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
      );
    } else if (plates == "Urethane") {
      return (
        <svg
          width="40"
          height="232"
          viewBox="0 0 40 232"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_65_13775)">
            <rect width="40" height="232" rx="4" fill="#373739" />
            <rect
              x="1"
              y="1"
              width="38"
              height="230"
              rx="3"
              stroke="#0D0D0D"
              stroke-opacity="0.5"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_65_13775">
              <rect width="40" height="232" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
  } else if (weight == 45) {
    if (plates == "Rogue Bumpers") {
      return (
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
      );
    } else if (plates == "Urethane") {
      return (
        <svg
          width="48"
          height="320"
          viewBox="0 0 48 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_65_13779)">
            <rect width="48" height="320" rx="4" fill="#373739" />
            <rect
              x="1"
              y="1"
              width="46"
              height="318"
              rx="3"
              stroke="#0D0D0D"
              stroke-opacity="0.5"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_65_13779">
              <rect width="48" height="320" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    }
  } else if (weight == 55) {
    if (plates == "Rogue Bumpers") {
      return (
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
      );
    } else if (plates == "Urethane") {
      return null;
    }
  }
};

const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height || "80px"};
  background: url(${(props) => handleBarbellSleeve(props.weight)});
  background-size: 100%;
  background-position: center right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

class BarbellSleeve extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper weight={this.props.bar} height="321px">
        {this.props.weights &&
          this.props.weights.map(
            (item) =>
              (item == "2.5" && <>{handlePlates(this.props.plates, 2.5)}</>) ||
              (item == "5" && <>{handlePlates(this.props.plates, 5)}</>) ||
              (item == "10" && <>{handlePlates(this.props.plates, 10)}</>) ||
              (item == "25" && <>{handlePlates(this.props.plates, 25)}</>) ||
              (item == "35" && <>{handlePlates(this.props.plates, 35)}</>) ||
              (item == "45" && <>{handlePlates(this.props.plates, 45)}</>) ||
              (item == "55" && <>{handlePlates(this.props.plates, 55)}</>)
          )}
      </Wrapper>
    );
  }
}

export default BarbellSleeve;
