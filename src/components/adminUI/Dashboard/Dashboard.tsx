"use client";
import React from "react";
import CountUp from "react-countup";
import { Card, Col, ConfigProvider, Progress, Row, Statistic } from "antd";
import Styles from "./Dashboard.module.css";
import Loader from "@/components/Loader/Loader";
import { useGetStaticsQuery } from "@/redux/api/adminApi";

const Dashboard = () => {
  const { data, isLoading } = useGetStaticsQuery(undefined);

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
    performers,
    categories,
    totalQuiz,
    totalCompletedTest,
    totalPending,
  } = data.result;
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
                    <h2>Total Performers</h2>
                  </div>
                }
                value={performers}
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
                    <h2>Total Categories</h2>
                  </div>
                }
                value={categories}
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
                    <h2>Total Quiz</h2>
                  </div>
                }
                value={totalQuiz}
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
                    <h2>Total Test</h2>
                  </div>
                }
                value={Number(totalCompletedTest) + Number(totalPending)}
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
                    <p> Completed Task</p>
                    <Progress
                      percent={
                        (Number(totalCompletedTest) * 100) /
                        (Number(totalCompletedTest) + Number(totalPending))
                      }
                      size="small"
                      strokeWidth={15}
                      strokeColor={conicColors}
                    />
                  </div>
                  <div>
                    <p>Pending Task</p>
                    <Progress
                      percent={
                        (Number(totalPending) * 100) /
                        (Number(totalCompletedTest) + Number(totalPending))
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
                      (Number(totalCompletedTest) * 100) /
                      (Number(totalCompletedTest) + Number(totalPending))
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

export default Dashboard;
