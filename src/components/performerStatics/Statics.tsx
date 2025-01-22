"use client";
import React from "react";
import CountUp from "react-countup";
import { Card, Col, ConfigProvider, Progress, Row, Statistic } from "antd";
import Styles from "./performerStatics.module.css";
import { useGetMyStaticsQuery } from "@/redux/api/performerApi";
import Loader from "../Loader/Loader";
import { useAppDispatch } from "@/redux/hooks";
import { addAuthData } from "@/redux/slice/authSlice";

const Statics = () => {
  const { data, isLoading } = useGetMyStaticsQuery(undefined);
  const dispatch = useAppDispatch();

  const calculateData = (total:number,divide:number) => {
    const average = (total / divide).toFixed(2);
    return Number(average)
    }

  const conicColors = {
    "0%": "#9930ef",
    "20%": "#5942cb",
    "75%": "#795ceb",
    "100%": "#9930ef",
  };
  if (isLoading) {
    return <Loader />;
  }

  const {
    totalTest,
    myPosition,
    category,
    totalScore,
    totalCompletedTest,
    totalPendingTest,
    totalRightAnswer,
    totalWrongAnswer,
    name,
    email,
  } = data.statics;
  dispatch(addAuthData({ email, name }));
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
                value={totalTest}
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
                    <h2>My Rank</h2>
                  </div>
                }
                value={myPosition}
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
                    <h2>Total Technology</h2>
                  </div>
                }
                value={category.length}
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
                    <h2>Total Score</h2>
                  </div>
                }
                value={totalScore}
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
                      percent={
                        calculateData(Number((Number(totalCompletedTest) * 100)),Number(totalCompletedTest) + Number(totalPendingTest))
                      }
                      size="small"
                      strokeWidth={15}
                      strokeColor={conicColors}
                    />
                  </div>
                  <div>
                    <p>Correct Answer</p>
                    <Progress
                      percent={
                        calculateData(Number(totalRightAnswer) * 100,Number(totalRightAnswer) + Number(totalWrongAnswer))
                      }
                      size="small"
                      strokeWidth={15}
                      strokeColor={conicColors}
                    />
                  </div>
                  <div>
                    <p>Wrong Answer</p>
                    <Progress
                         percent={
                        calculateData(Number(totalWrongAnswer) * 100,Number(totalRightAnswer) + Number(totalWrongAnswer))
                      }
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
                       percent={
                        calculateData((Number(totalRightAnswer) * 100) /
                        (Number(totalRightAnswer) + Number(totalWrongAnswer)) +
                        (Number(totalCompletedTest) * 100) /
                          (Number(totalCompletedTest) +
                            Number(totalPendingTest)),2)
                      }
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
