import React from "react";
import Image from "next/image";
import QuestionAnswer from "./question-answer";
import QuestionHeader from "./question-header";
import Form from "../form";

const QuestionCenter = () => {
  return (
    <div className="flex h-full flex-col w-full md:w-2/3  mt-10 justify-normal items-start md:items-start p-4 md:p-0">
      <QuestionHeader />
      <QuestionAnswer />
      <Form />
    </div>
  );
};

export default QuestionCenter;
