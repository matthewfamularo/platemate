import React, { Component, useRef } from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CSVReader from "react-csv-reader";
import "swiper/css";
import "swiper/css/pagination";

const Wrapper = styled.div`
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
  max-height: -moz-available;
  max-height: -webkit-fill-available;
  max-height: fill-available;
`;

const SlideWrap = styled.div`
  width: 100%;
  padding: 12px 12px 32px 12px;
  height: 100%;
`;

const Slide = styled.div`
  width: 100%;
  border-radius: 16px;
  background: #151515;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const Top = styled.div`
  padding: 16px 32px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.div`
  font-size: 24px;
  line-height: 32px;
  color: white;
  width: 100%;
  text-align: center;
`;

const BigHeading = styled.span`
  font-size: 48px;
`;

const Subheading = styled.div`
  font-size: 20px;
  line-height: 28px;
  color: white;
  width: 100%;
  text-align: center;
`;

const Emoji = styled.div`
  font-size: 64px;
  color: white;
  width: 100%;
  text-align: center;
`;

const Space = styled.div`
  height: 24px;
  width: 100%;
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  width: 100%;
  text-align: center;
  color: #e1e1e1;
`;

const Value = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 32px;
  line-height: 40px;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const DoubleDouble = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  & > div {
    flex: 0 1 calc(50% - 16px);
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 16px;
    min-height: 120px;
    margin: 8px;
    border-radius: 16px;
    background: #1a1a1a;
  }
`;

class Wrapped extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: "",
      dataProcessed: false,
    };
  }

  async handleDataImport(csv) {
    let data = csv;
    data.shift();
    this.setState(
      {
        data: data,
        loaded: true,
      },
      () => {
        this.processData();
      }
    );
  }

  processData() {
    let dataThisYear = this.state.data;
    let uniqueDates = [];
    let dateObjects = [];

    //filter down to only exercises done this year
    dataThisYear = dataThisYear.filter(
      (ex) => ex[0] != null && ex[0].startsWith("2023")
    );

    //create an array of each date exercised on
    dataThisYear.forEach((e) => uniqueDates.push(e[0]));
    uniqueDates = [...new Set(uniqueDates)];

    //get total time spent
    let duration = 0;
    uniqueDates.forEach((e) => {
      let x = dataThisYear.filter((ex) => ex[0] == e)[0];
      let y = x[2];
      let converted;
      if (y.includes("h")) {
        let h = Number(y.split("h")[0]);
        let m = Number(y.split("h")[1].split("m")[0]);
        h = h * 60;
        converted = h + m;
      } else {
        converted = Number(y.split("m")[0]);
      }
      duration += converted;
    });

    //get total reps
    let reps = 0;
    dataThisYear.forEach((e) => {
      reps += Number(e[6]);
    });

    //get exercises
    let uniqueExercises = [];
    dataThisYear.forEach((e) => uniqueExercises.push(e[3]));
    uniqueExercises = [...new Set(uniqueExercises)];

    //get total weight
    let totalWeight = 0;
    dataThisYear.forEach((e) => {
      totalWeight += Number(e[5]) * Number(e[6]);
    });

    this.setState({
      dataThisYear: dataThisYear,
      sessions: uniqueDates,
      totalSessions: uniqueDates.length,
      dataProcessed: true,
      totalMinutes: duration,
      totalReps: reps,
      totalExercises: uniqueExercises.length,
      totalWeight: totalWeight,
      cars: Math.round(totalWeight / 3300),
      elephants: Math.round(totalWeight / 15000),
      airplanes: Math.round(totalWeight / 400000),
      houses: Math.round(totalWeight / 100000),
    });
  }

  render() {
    if (!this.state.loaded && !this.state.dataProcessed) {
      return (
        <Wrapper>
          <CSVReader
            cssClass="csv-reader-input"
            label="Upload Strong CSV export"
            onFileLoaded={(data, fileInfo) => this.handleDataImport(data)}
            onError={() => console.log("error")}
            inputId="upload"
            inputName="upload"
            inputStyle={{ color: "white" }}
          />
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides
            pagination
            wrapperClass="swiperWrap"
          >
            <SwiperSlide>
              <SlideWrap>
                <Slide>
                  <Top>
                    <Heading>
                      Congratulations on all of your progress this year.
                    </Heading>
                  </Top>
                  <DoubleDouble>
                    <div>
                      <Label>Total sessions</Label>{" "}
                      <Value>{this.state.totalSessions}</Value>
                    </div>
                    <div>
                      <Label>Total minutes</Label>{" "}
                      <Value>{this.state.totalMinutes}</Value>
                    </div>
                    <div>
                      <Label>Total reps</Label>{" "}
                      <Value>{this.state.totalReps}</Value>
                    </div>
                    <div>
                      <Label>Total exercises</Label>{" "}
                      <Value>{this.state.totalExercises}</Value>
                    </div>
                  </DoubleDouble>
                </Slide>
              </SlideWrap>
            </SwiperSlide>
            <SwiperSlide>
              <SlideWrap>
                <Slide>
                  <Top>
                    <Subheading>You lifted a total of</Subheading>
                    <Space />
                    <Heading>
                      <BigHeading>{this.state.totalWeight}</BigHeading>lbs
                    </Heading>
                  </Top>
                  <Label>That's equivalent to</Label>
                  <DoubleDouble>
                    <div>
                      <Value>{this.state.cars}</Value>
                      <Emoji>🚗</Emoji>
                    </div>
                    <div>
                      <Value>{this.state.elephants}</Value>
                      <Emoji>🐘</Emoji>
                    </div>
                    <div>
                      <Value>{this.state.houses}</Value>
                      <Emoji>🏠</Emoji>
                    </div>
                    <div>
                      <Value>{this.state.airplanes}</Value>
                      <Emoji>🛩️</Emoji>
                    </div>
                  </DoubleDouble>
                </Slide>
              </SlideWrap>
            </SwiperSlide>
          </Swiper>
        </Wrapper>
      );
    }
  }
}

export default Wrapped;
