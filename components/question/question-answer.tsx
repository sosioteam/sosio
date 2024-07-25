"use client";

import React, { useState } from "react";

interface Section {
  question: string;
  paragraphs: string[];
}

const questionsAndAnswers = [
  {
    question: "What exactly is Boon & Bliss?",
    paragraphs: [
      "We are an e-gift card... but different! How?",
      "Unlike traditional gift cards who want to lock your cash by a selected merchant, we put consumer in the center. You can create a gift card for anything - be it the next epic trip, or a guitar or even a sabbatical leave! You make you contribution towards the goal that is meaningful and relevant for your friend - and invite more friends to chip in.",
      "Once done, you send the magic link to the receiver through any messenger. The receiver can spend it on anything by cashing it out to his bank account. No deadlines, no limitations. But one: All contributors deserve to know what is that special gift that the receiver decided to treat themselves with :)",
    ],
  },
  {
    question: "How do I start?",
    paragraphs: [
      "Download the Boon & Bliss mobile gifting App, create an account and choose from two tabs:",
      "Give: Start the gifting process by pressing the Give a dream gift button. Once you are done with your contribution, you will get a magic link to invite more friends to chip in.",
      "Receive: Have your own celebration soon and do not want to get another pile of unwanted gifts? Go to 'My Dreams' and add a dream you want to raise money for. Invite your friends to chip in via any message by sharing a magic link. And enjoy the Ka-Ching sound :)",
    ],
  },
  {
    question: "I received a gift. How do I open it?",
    paragraphs: [
      "Congratulations! To unwrap your gift, just download the App and click the link that you received. Ta-daaa!",
      "Do not forget to say Thank you to all the contributors via the app, they have opted to spare a pile of small unwanted gifts and give you something bigger and relevant!",
      "Would you rather spend these money on something else? We got you covered! Just edit the title and cover picture - and keep saving for what matters most to you! All contributors will receive an update.",
      "Ready to cash out and fulfill that dream already? Just make a 10 cents transaction to connect your bank account and we will wire you the cash - to spend anywhere. We mean it.",
    ],
  },
  {
    question: "Can I spend my gift on something else?",
    paragraphs: [
      "Absolutely! You can edit your Boon to re-purpose it for another dream. You can also just cash out your Boon to spend it on whatever you wish. Just remember to say thank you :).",
    ],
  },
  {
    question: "Can I spend my gift on something else?",
    paragraphs: [
      "Absolutely! You can edit your Boon to re-purpose it for another dream. You can also just cash out your Boon to spend it on whatever you wish. Just remember to say thank you :).",
    ],
  },
];

const QuestionAnswer: React.FC = () => {
  const [mainExpanded, setMainExpanded] = useState<boolean>(false);
  const [additionalExpanded, setAdditionalExpanded] = useState<boolean[]>(
    Array(questionsAndAnswers.length).fill(false)
  );

  const toggleMainExpand = () => {
    setMainExpanded((prevMainExpanded) => !prevMainExpanded);
  };

  const toggleAdditionalExpand = (index: number) => {
    setAdditionalExpanded((prevAdditionalExpanded) =>
      prevAdditionalExpanded.map((isExpanded, i) =>
        i === index ? !isExpanded : isExpanded
      )
    );
  };

  return (
    <div className="flex flex-col w-full mt-10 bg-gray-200 justify-center items-center md:items-start">
      {questionsAndAnswers.map((section, index) => (
        <div key={index} className="mt-4 w-full relative z-10">
          <div
            className={`flex justify-between items-center w-full p-2 rounded-full relative z-10 ${
              additionalExpanded[index] ? "bg-[#EE517F]" : "bg-teal-400"
            }`}
          >
            <p className="text-white font-bold">{section.question}</p>
            <button
              className="bg-white text-black text-2xl font-bold rounded-full p-2 w-10 h-10 flex items-center justify-center"
              onClick={() => toggleAdditionalExpand(index)}
            >
              {additionalExpanded[index] ? "×" : "+"}
            </button>
          </div>
          {additionalExpanded[index] && (
            <div className="bg-white text-black font-bold text-sm shadow-md w-[99%] max-h-64 overflow-y-auto relative z-0 rounded-b-lg mx-1 p-4 pt-8 -mt-2">
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionAnswer;
