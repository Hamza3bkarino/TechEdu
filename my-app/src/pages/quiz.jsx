import { useEffect, useState } from "react";
import questions from "../data/questions";
import { useNavigate,useLocation } from "react-router-dom";

function Quiz() {
  const location = useLocation();
  const name = location.state;
  const navigate = useNavigate();
  const [start, setStart] = useState(false);
  const [appearAnimation, setAppearAnimation] = useState(true);
  const [init, setInit] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(20);
  const [selected, setSelected] = useState(null);
  const lettres = ["A", "B", "C", "D"];

  // animation for question number
  useEffect(() => {
    if (start) {
      setAppearAnimation(true);
      const timeOut = setTimeout(() => {
        setAppearAnimation(false);
      }, 2500);
      return () => clearTimeout(timeOut);
    }
  }, [init, start]);

// control timer
useEffect(() => {
    if (!start) return;
  
    if (timer > 0) {
      const timerInterVal = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
  
      return () => clearInterval(timerInterVal);
    } else  {
      // time is 0, move to next question
      if(init===questions.length-1){
        navigate('/result',{state:{result:undefined,counter,name}})
      }
      setInit(prevInit => prevInit + 1);
      setTimer(20);
    }
  
  }, [start,timer]);
  
  

  // start quiz
  const handleStartQuiz = () => {
    setStart(true);
    setInit(0);
    setTimer(20);
  };

  // answer handling
  const handleAnswer = (item) => {
    setSelected(item);
    let result = 0
      if (item === questions[init].answer) {
        result=counter+1
        setCounter(result)
      }

    if (init < questions.length - 1) {
      setTimeout(() => {
        setInit(init + 1);
        setTimer(20);
        setSelected(null);
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/result", { state: {result,counter:undefined ,name}});
      }, 1000);
    }
  };

  return (
    <>
      {!start && (
        <>
          <h1 className="readyTitle">
            Are you ready <span>?</span>
          </h1>
          <button className="start" onClick={handleStartQuiz}>
            Start Now
          </button>
        </>
      )}

      {start && init < questions.length && (
        <div className="cardQuiz">
          {appearAnimation && (
            <>
              <div className="bg"></div>
              <span key={init} className="countNumber">
                {init + 1}
              </span>
            </>
          )}

          <h2>{questions[init].question}</h2>
          <ul className="list">
            {questions[init].options.map((item, index) => (
              <li
                key={index}
                onClick={() => handleAnswer(item)}
                className={
                  selected === item
                    ? item === questions[init].answer
                      ? "valid"
                      : "error"
                    : ""
                }
              >
                <h3>{lettres[index]}</h3>
                {selected === item && timer > 0 && (
                  <img
                    src={
                      item === questions[init].answer
                        ? "/images/check.png"
                        : "/images/close.png"
                    }
                    alt="status"
                    className="icon"
                  />
                )}
                {item}
              </li>
            ))}
            <p className="timer">
              Time left:{" "}
              <span className={timer > 5 ? "timerSafe" : "timerDanger"}>
                {timer} sec
              </span>
            </p>
          </ul>
        </div>
      )}
    </>
  );
}

export default Quiz;
