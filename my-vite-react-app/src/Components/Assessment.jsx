import React, { useState } from "react";
import "./Assessment.css";
import Question from "./Question";
import MainResult from "./MainResult";

const Assessment = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerInd, setAnswerInd] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    });
    const [showResult, setShowResult] = useState(false);

    const { question, options, correctAnswer } = questions[currentQuestion];

    const onAnswerClick = (answer, index) => {
        setAnswerInd(index);
        setAnswer(answer === correctAnswer);
    };

    const onClickNext = () => {
        setAnswerInd(null);
        setResult((prev) =>
            answer
                ? {
                      ...prev,
                      score: prev.score + 1,
                      correctAnswers: prev.correctAnswers + 1,
                  }
                : {
                      ...prev,
                      wrongAnswers: prev.wrongAnswers + 1,
                  }
        );

        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setShowResult(true);
        }
    };

    const onQuestionNumberClick = (index) => {
        setCurrentQuestion(index);
        setAnswerInd(null);
    };

    if (showResult) {
        return (
            <div className="">
                <MainResult result={result} />
            </div>
        );
    }

    return (
        <div className="container">
            <div>
                <Question
                    questions={questions}
                    onQuestionNumberClick={onQuestionNumberClick}
                />
            </div>

            <div className="assessment-container">
                <span className="active-question-no">Q{currentQuestion + 1}</span>
                <span className="total-question">/{questions.length}</span>
                <h2>{question}</h2>
                <ul>
                    {options.map((answer, index) => (
                        <li
                            key={answer}
                            onClick={() => onAnswerClick(answer, index)}
                            className={answerInd === index ? "selected-answer" : null}
                        >
                            {answer}
                        </li>
                    ))}
                </ul>
                <div className="footer">
                    <button onClick={onClickNext} disabled={answerInd === null}>
                        {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Assessment;
