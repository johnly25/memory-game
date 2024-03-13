import { useState } from 'react'
import './App.css'
import { Title } from './components/Title'
import { Score } from './components/Score';
import { Highscore } from './components/Highscore';
import { Cards } from './components/Cards';
// mode 
// round 
// game over screen

function App() {
  const [highscore, setHighscore] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameover] = useState(false);

  return (
    <div className='container'>
      <Title title='DBZ Memory Game' />
      <Highscore highscore={highscore} />
      <Score score={score} />
      <Cards score={score} setScore={setScore} setGameover ={setGameover} highscore={highscore} setHighscore = {setHighscore}/>
    </div>
  )
}

export default App;
