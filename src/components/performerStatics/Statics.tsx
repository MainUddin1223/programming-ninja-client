"use client";
import React from "react";
import CountUp from "react-countup";
import { Card, Col, ConfigProvider, Progress, Row, Statistic } from "antd";
import Styles from "./performerStatics.module.css";

const Statics = () => {
  const conicColors = {
    "0%": "#9930ef",
    "20%": "#5942cb",
    "75%": "#795ceb",
    "100%": "#9930ef",
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "rgb(224, 223, 223)",
          colorTextHeading: "rgb(224, 223, 223)",
        },
      }}
    >
      <div>
        <Row gutter={[20, 20]}>
          <Col sm={24} md={12}>
            <div className={Styles.statics_container}>
              <Statistic
                title={
                  <div style={{ color: "rgb(224, 223, 223)" }}>
                    <h2>Total test</h2>
                  </div>
                }
                value={200}
                formatter={(value) => (
                  <CountUp end={Number(value)} separator="," />
                )}
              />
              <div>
                <Progress
                  size={68}
                  showInfo={false}
                  strokeWidth={12}
                  type="circle"
                  percent={100}
                  strokeColor={conicColors}
                />
              </div>
            </div>
          </Col>
          <Col sm={24} md={12}>
            <div className={Styles.statics_container}>
              <Statistic
                title={
                  <div style={{ color: "rgb(224, 223, 223)" }}>
                    <h2>Total test</h2>
                  </div>
                }
                value={200}
                formatter={(value) => (
                  <CountUp end={Number(value)} separator="," />
                )}
              />
              <div>
                <Progress
                  size={68}
                  showInfo={false}
                  strokeWidth={12}
                  type="circle"
                  percent={100}
                  strokeColor={conicColors}
                />
              </div>
            </div>
          </Col>
          <Col sm={24} md={12}>
            <div className={Styles.statics_container}>
              <Statistic
                title={
                  <div style={{ color: "rgb(224, 223, 223)" }}>
                    <h2>Total test</h2>
                  </div>
                }
                value={200}
                formatter={(value) => (
                  <CountUp end={Number(value)} separator="," />
                )}
              />
              <div>
                <Progress
                  size={68}
                  showInfo={false}
                  strokeWidth={12}
                  type="circle"
                  percent={100}
                  strokeColor={conicColors}
                />
              </div>
            </div>
          </Col>
          <Col sm={24} md={12}>
            <div className={Styles.statics_container}>
              <Statistic
                title={
                  <div style={{ color: "rgb(224, 223, 223)" }}>
                    <h2>Total test</h2>
                  </div>
                }
                value={200}
                formatter={(value) => (
                  <CountUp end={Number(value)} separator="," />
                )}
              />
              <div>
                <Progress
                  size={68}
                  showInfo={false}
                  strokeWidth={12}
                  type="circle"
                  percent={100}
                  strokeColor={conicColors}
                />
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <Card
            style={{
              backgroundColor: "var(--secondary)",
              color: "rgb(222, 207, 207)",
              margin: "25px 0",
            }}
          >
            <h1>Overall Performance</h1>
            <Row>
              <Col xs={24} md={12}>
                <div>
                  <div>
                    <p>Quiz Completed</p>
                    <Progress
                      percent={90}
                      size="small"
                      strokeWidth={15}
                      strokeColor={conicColors}
                    />
                  </div>
                  <div>
                    <p>Correct Answer</p>
                    <Progress
                      percent={30}
                      size="small"
                      strokeWidth={15}
                      strokeColor={conicColors}
                    />
                  </div>
                  <div>
                    <p>wrong Answer</p>
                    <Progress
                      percent={30}
                      size="small"
                      strokeWidth={15}
                      strokeColor={conicColors}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Progress
                    size={220}
                    strokeWidth={7}
                    type="circle"
                    percent={70}
                    strokeColor={conicColors}
                  />
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Statics;
