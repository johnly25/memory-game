import { useState} from 'react'
import './App.css'
import { Title } from './components/Title'
import { Cards } from './components/Cards';
import { Gameover } from './components/Gameover';
import { Scores } from './components/Scores';

function App() {
  const [game, setGame] = useState({
    highscore: 0,
    score: 0, 
    gameOver: false,
    playerWin: false,
    totalCards: 0,
    gameList: []
  });

  return (
    <div className='container'>
      <Title title='Memory Game' />
      <Scores game={game}/>
      <Cards  game={game} setGame={setGame} />
      <Gameover  game={game} setGame={setGame}/>
    </div>
  )
}

export default App;
