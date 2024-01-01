import React, { Component, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlateCalculator from "./PlateCalculator";
import Wrapped from "./Wrapped";

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
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Router>
          <Routes>
            <Route exact path="/" element={<PlateCalculator />} />
          </Routes>
          <Routes>
            <Route exact path="/wrapped" element={<Wrapped />} />
          </Routes>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
