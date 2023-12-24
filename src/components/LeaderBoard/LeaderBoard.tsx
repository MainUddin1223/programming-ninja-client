"use client";

import { useGetLeaderBoardQuery } from "@/redux/api/performerApi";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Loader from "../Loader/Loader";

const columns: ColumnsType<any> = [
  {
    title: "RowHead",
    dataIndex: "key",
    rowScope: "row",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "Total Test",
    dataIndex: "testCompleted",
    key: "testCompleted",
  },
  {
    title: "Avg",
    dataIndex: "testCompleted",
    key: "testCompleted",
  },
];

const LeaderBoard = () => {
  const { data, isLoading } = useGetLeaderBoardQuery(undefined);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Leader Board</h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div style={{ marginTop: "25px" }}>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px",
                border: "1px solid",
              }}
            >
              <p style={{ flex: "1 1 0", width: "0", textAlign: "center" }}>
                Position
              </p>
              <p style={{ flex: " 1 1 0", width: "0", textAlign: "center" }}>
                Name
              </p>
              <p style={{ flex: " 1 1 0", width: "0", textAlign: "center" }}>
                Score
              </p>
              <p style={{ flex: " 1 1 0", width: "0", textAlign: "center" }}>
                Total test
              </p>
              <p style={{ flex: " 1 1 0", width: "0", textAlign: "center" }}>
                Average
              </p>
            </div>
            {data.data.map((data: any, i: number) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "5px",
                  border: "1px solid",
                }}
              >
                <p style={{ flex: " 1 1 0", width: "0", textAlign: "center" }}>
                  {i + 1}
                </p>
                <p style={{ flex: " 1 1 0", width: "0", textAlign: "center" }}>
                  {data.user.name}
                </p>
                <p style={{ flex: " 1 1 0", width: "0", textAlign: "center" }}>
                  {data.score}
                </p>
                <p style={{ flex: " 1 1 0", width: "0", textAlign: "center" }}>
                  {data.testCompleted}
                </p>
                <p style={{ flex: " 1 1 0", width: "0", textAlign: "center" }}>
                  {(data.score / data.testCompleted).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
