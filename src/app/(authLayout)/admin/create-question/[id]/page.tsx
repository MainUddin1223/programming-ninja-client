"use client";

import { Button, Input, Radio, Space } from "antd";
import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import Search from "antd/es/input/Search";

type IDProps = {
  params: any;
};
const AddQuiz = ({ params }: IDProps) => {
  const [questionType, setQuestionType] = useState("single");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);

  const onSearch = (value: string) => {
    setOptions([...options, value]);
  };
  console.log(params);
  return (
    <div>
      <p>Need redux impl</p>
      <h1>Create a quiz</h1>
      <div>
        <p>Select Question type</p>
        <Radio.Group
          onChange={(e: RadioChangeEvent) => {
            setQuestionType(e.target.value);
          }}
          value={questionType}
        >
          <Radio value={"single"}>
            <p style={{ color: "red" }}>Single</p>
          </Radio>
          <Radio value={"multiple"}>
            <p style={{ color: "red" }}>Multiple choice</p>
          </Radio>
        </Radio.Group>
      </div>
      <div>
        <p>Question</p>
        <input type="text" />
      </div>
      <div>
        <p>Options</p>
        {options.map((option, i) => (
          <div key={i}>{option}</div>
        ))}
        <div>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>
      </div>
      <div>
        <p>Answers</p>
        <input type="text" />
      </div>
    </div>
  );
};

export default AddQuiz;
