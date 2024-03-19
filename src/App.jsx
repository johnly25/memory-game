import { useState} from 'react'
import './App.css'
import { Title } from './components/Title'
import { Cards } from './components/Cards';
import { Gameover } from './components/Gameover';
import { Scores } from './components/Scores';
//round
function App() {
  const [highscore, setHighscore] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameover] = useState(false);
  const [totalCards, setTotalCards] = useState(0);

  return (
    <div className='container'>
      <Title title='Memory Game' />
      <Scores  highscore={highscore}  score={score}/>
      <Cards score={score} setScore={setScore} gameOver={gameOver} setGameover={setGameover} highscore={highscore} setHighscore={setHighscore} totalCards={totalCards} setTotalCards={setTotalCards} />
      <Gameover score={score} setScore={setScore} gameOver={gameOver} setGameover={setGameover} totalCards={totalCards} />
    </div>
  )
}

export default App;
