"use client";

import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";

const CreateQuiz = ({ questionData, setQuestionData }) => {
  const [option, setOption] = useState("");
  const [answer, setAnswer] = useState("");
  useEffect(() => {}, [questionData.options, questionData.answer]);

  return (
    <div>
      <p>Select Question type</p>
      <Radio.Group
        onChange={(e: RadioChangeEvent) => {
          setQuestionData({
            ...questionData,
            questionType: e.target.value,
          });
        }}
        value={questionData.questionType}
      >
        <Radio value={"single"}>Single</Radio>
        <Radio value={"multiple"}>Multiple choice</Radio>
      </Radio.Group>
      <p>Question</p>
      <input
        style={{ padding: "5px", margin: "15px 0", width: "100%" }}
        onChange={(e) =>
          setQuestionData({ ...questionData, question: e.target.value })
        }
        type="text"
        placeholder="Question"
      />

      <p>Options</p>
      <div>
        {questionData.options.map((option, i) => (
          <p key={i}>{option}</p>
        ))}
      </div>
      <input
        style={{ padding: "5px", margin: "15px 0", width: "100%" }}
        onChange={(e) => setOption(e.target.value)}
        type="text"
        placeholder="Question"
      />
      <button
        onClick={() => {
          questionData.options.push(option);
        }}
      >
        Add
      </button>

      <p>Answer</p>
      <div>
        {questionData.answer.map((option, i) => (
          <p key={i}>{option}</p>
        ))}
      </div>
      <input
        style={{ padding: "5px", margin: "15px 0", width: "100%" }}
        onChange={(e) => setAnswer(e.target.value)}
        type="text"
        placeholder="Question"
      />
      <button
        onClick={() => {
          questionData.answer.push(answer);
        }}
      >
        Add
      </button>
      {/* <p>Question</p>
          <input
            style={{ padding: "5px", margin: "15px 0", width: "100%" }}
            // onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Question"
          />
                  <p>Options</p>
                  <div>
                      {
                          questionData.options.map((option, i) => (
                              <p key={i}>{ option}</p>
                          ))
                      }
                  </div>
          <input
            style={{ padding: "5px", margin: "15px 0", width: "100%" }}
            // onChange={(e) => setOption(e.target.value)}
            type="text"
            placeholder="Question"
                  />
                  <button onClick={()=>{questionData.options.push(option)}}>Add</button>
          <p>Answer</p>
          <input
            style={{ padding: "5px", margin: "15px 0", width: "100%" }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            type="text"
            placeholder="Question"
          /> */}
    </div>
  );
};

export default CreateQuiz;
