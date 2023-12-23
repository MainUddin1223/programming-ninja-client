"use client";

import { useGetMyTestsQuery } from "@/redux/api/performerApi";
import Loader from "../Loader/Loader";
import { Col, Row } from "antd";
import Styles from "./MyQuizTest.module.css";
import { useRouter } from "next/navigation";

const MyQuizTest = () => {
  const { data, isLoading } = useGetMyTestsQuery(undefined);
  const router = useRouter();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Quiz test list</h1>
      <div style={{ marginTop: "25px" }}>
        <Row gutter={[20, 20]}>
          {data.result.map((quiz: any, i: number) => (
            <Col key={i} xs={24} md={12} lg={8}>
              <div className={Styles.test_card}>
                <h3
                  style={{
                    fontSize: "25px",
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                >
                  Test {i + 1}
                </h3>
                <div className={Styles.test_card_info}>
                  <p>Technology : {quiz.category.category}</p>
                  <p>Total score : {quiz.score}</p>
                  <p>Correct Answer : {quiz.rightAnswer}</p>
                  <p>Wrong Answer : {quiz.wrongAnswer}</p>
                  {quiz.isCompleted ? (
                    <p style={{ color: "green", fontWeight: "bod" }}>
                      Quiz Test Completed
                    </p>
                  ) : (
                    <p style={{ color: "red", fontWeight: "bold" }}>
                      Quiz Test Not completed
                    </p>
                  )}
                </div>
                {!quiz.isCompleted && (
                  <button
                    className={Styles.complete_now_btn}
                    onClick={() => router.push(`/quiz-test/${quiz.id}`)}
                  >
                    Complete now
                  </button>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MyQuizTest;
