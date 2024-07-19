import React from "react";
import QuestionLeft from "./question-left";
import QuestionCenter from "./question-center";
import QuestionRight from "./question-right";

const Question = () => {
  return (
    <div className="flex h-full flex-row overflow-hidden md:flex-row mt-10 bg-gray-200 justify-normal items-center md:items-start">
      <QuestionLeft />
      <QuestionCenter />
      <QuestionRight />
    </div>
  );
};

export default Question;
