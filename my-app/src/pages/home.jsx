import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [inputValue, setInputValue] = useState('');

  // onChange input 
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  // after Click  on submit button
  const handleClick = () => {
    setName(inputValue);
    setInputValue('')
    document.getElementById('toQuiz')?.scrollIntoView({behavior:"smooth"})
};

  // for navigate to quiz page to start it
  const handleStart = () => {
    navigate('/quiz',{state:name})
  };



  return (
    <>
      <section className='Hero_Section'>
        <h1>
          Let the Quiz Adventure Begin!
        </h1>
        <div className='form'>
          <label htmlFor="name">Start with Name</label>
          <input
            type="text"
            id='name'
            placeholder='your name'
            value={inputValue}
            onChange={handleChange} 
          />
          <button onClick={handleClick}>Submit</button>
        </div>
      </section>

      <br />
      <br />
      <br />

      <button className='startQuiz' id="toQuiz" onClick={handleStart}>
        Let Start Quiz
      </button>
    </>
  );
}

export default Home;
