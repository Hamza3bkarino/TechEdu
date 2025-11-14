import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  
  const counter = location.state?.counter; // get counter or score
  const result = location.state?.result; // get result or score
  const name = location.state?.name; // get name of user
  const navigate = useNavigate()


  const handleRestart=()=>{
    navigate('/quiz')
  }




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
