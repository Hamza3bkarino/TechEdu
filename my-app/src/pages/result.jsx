import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  
  const counter = location.state?.counter; // can be undefined if user didn't come from quiz
  const result = location.state?.result; // can be undefined if user didn't come from quiz
  const name = location.state?.name; // can be undefined if user didn't come from quiz
  const navigate = useNavigate()
  const handleRestart=()=>{
    navigate('/quiz')
  }
console.log(counter);


  return (
    <div className="result">
      {(counter !== undefined ) || (result !== undefined ) ? (
        <>
          {counter > 5 || result >5 ? (
            <h1>Congratulations <span>{name||'unknown'}</span></h1>
          ) : (
            <h1>Hi! <span>Unknown</span></h1>
          )}
          <p>
            <span className={counter > 5 || result > 5 ? 'goodScore' : 'badScore'}>
              {counter || result}
            </span> /10
          </p>
        </>
      ) : (
        <>
          <h1>Hello <span>Unknown</span></h1>
          <p className="alertMessage">You should pass quiz to get a result</p>
          
        </>
      )}
      <button className="restartQuiz" onClick={()=>handleRestart()}>
            Restart Quiz
      </button>
    </div>
  );
}

export default Result;
