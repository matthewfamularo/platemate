import React, { Component } from "react";
import styled from "styled-components";

import RoguePlate2Half from "../assets/plate-2.5.png";
import RoguePlate5 from "../assets/plate-5.png";
import RoguePlate10 from "../assets/plate-10.png";
import RoguePlate25 from "../assets/plate-25.png";
import RoguePlate35 from "../assets/plate-35.png";
import RoguePlate45 from "../assets/plate-45.png";
import RoguePlate55 from "../assets/plate-55.png";

import UrethanePlate2Half from "../assets/urethane-plate-2.5.png";
import UrethanePlate5 from "../assets/urethane-plate-5.png";
import UrethanePlate10 from "../assets/urethane-plate-10.png";
import UrethanePlate25 from "../assets/urethane-plate-25.png";
import UrethanePlate35 from "../assets/urethane-plate-35.png";
import UrethanePlate45 from "../assets/urethane-plate-45.png";

const handlePlates = (plates, weight) => {
  if (weight == 2.5) {
    if (plates == "Rogue Bumpers") {
      return RoguePlate2Half;
    } else if (plates == "Urethane") {
      return UrethanePlate2Half;
    }
  } else if (weight == 5) {
    if (plates == "Rogue Bumpers") {
      return RoguePlate5;
    } else if (plates == "Urethane") {
      return UrethanePlate5;
    }
  } else if (weight == 10) {
    if (plates == "Rogue Bumpers") {
      return RoguePlate10;
    } else if (plates == "Urethane") {
      return UrethanePlate10;
    }
  } else if (weight == 25) {
    if (plates == "Rogue Bumpers") {
      return RoguePlate25;
    } else if (plates == "Urethane") {
      return UrethanePlate25;
    }
  } else if (weight == 35) {
    if (plates == "Rogue Bumpers") {
      return RoguePlate35;
    } else if (plates == "Urethane") {
      return UrethanePlate35;
    }
  } else if (weight == 45) {
    if (plates == "Rogue Bumpers") {
      return RoguePlate45;
    } else if (plates == "Urethane") {
      return UrethanePlate45;
    }
  } else if (weight == 55) {
    if (plates == "Rogue Bumpers") {
      return RoguePlate55;
    } else if (plates == "Urethane") {
      return null;
    }
  }
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  overflow-x: ${(props) => (props.lock ? "hidden" : "scroll")};
  overflow-y: hidden;
  align-items: end;
  gap: 16px;
  padding: 16px 24px 16px 24px;
`;

const Plate = styled.div`
  flex: 0 0 ${(props) => props.size}px;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  font-size: 10px;
  color: #929292;
  img {
    zoom: 50%;
    padding: 0;
    margin: 0 0 8px 0;
  }
`;

class Plates extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper id="plates" lock={this.props.open && this.props.lock}>
        <Plate
          onClick={() => !this.props.open && this.props.updateWeight("+", 2.5)}
        >
          <img src={handlePlates(this.props.plates, 2.5)} />
          {this.props.open
            ? " "
            : `${this.props.weight + this.props.bar + 5}lbs`}
        </Plate>
        <Plate
          onClick={() => !this.props.open && this.props.updateWeight("+", 5)}
        >
          <img src={handlePlates(this.props.plates, 5)} />
          {this.props.open
            ? " "
            : `${this.props.weight + this.props.bar + 10}lbs`}
        </Plate>
        <Plate
          onClick={() => !this.props.open && this.props.updateWeight("+", 10)}
        >
          <img src={handlePlates(this.props.plates, 10)} />
          {this.props.open
            ? " "
            : `${this.props.weight + this.props.bar + 20}lbs`}
        </Plate>
        <Plate
          onClick={() => !this.props.open && this.props.updateWeight("+", 25)}
        >
          <img src={handlePlates(this.props.plates, 25)} />
          {this.props.open
            ? " "
            : `${this.props.weight + this.props.bar + 50}lbs`}
        </Plate>
        <Plate
          onClick={() => !this.props.open && this.props.updateWeight("+", 35)}
        >
          <img src={handlePlates(this.props.plates, 35)} />
          {this.props.open
            ? " "
            : `${this.props.weight + this.props.bar + 70}lbs`}
        </Plate>
        <Plate
          onClick={() => !this.props.open && this.props.updateWeight("+", 45)}
        >
          <img src={handlePlates(this.props.plates, 45)} />
          {this.props.open
            ? " "
            : `${this.props.weight + this.props.bar + 90}lbs`}
        </Plate>
        {this.props.plates == "Rogue Bumpers" && (
          <Plate
            onClick={() => !this.props.open && this.props.updateWeight("+", 55)}
          >
            <img src={handlePlates(this.props.plates, 55)} />
            {this.props.open
              ? " "
              : `${this.props.weight + this.props.bar + 110}lbs`}
          </Plate>
        )}
      </Wrapper>
    );
  }
}

export default Plates;
