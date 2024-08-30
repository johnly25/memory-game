import ReactCardFlip from 'react-card-flip';
import background from '../assets/card-back.png'
import { useEffect } from 'react';

export function Card(props) {
    function onClick(e) {
        e.preventDefault();
        const src = e.currentTarget.getAttribute('src');
        if (!props.game.gameList.includes(src)) {
            let score = props.game.score + 1;
            checkScore(score);
        } else {
            props.setGame({ ...props.game, highscore: (props.game.score > props.game.highscore ? props.game.score : props.game.highscore), gameOver: true });
        }

        function checkScore(score) {
            if (score == props.game.totalCards) {
                props.setGame({ ...props.game, score: score, highscore: (score > props.game.highscore ? score : props.game.highscore), gameOver: true, playerWin: true });

            } else {
                props.setGame({ ...props.game, score: score, gameList: [...props.game.gameList, src] });
            }
        }
    }

    return (
        <ReactCardFlip isFlipped={props.isFlipped} flipDirection="horizontal">
            <div className="card">
                <div className="image card-front" src={props.src} onClick={onClick}>
                    <img src={props.src} alt="" />
                </div>
            </div>
            <div className='card'>
                <div className="image">
                    <img src={background} alt="" />
                </div>
            </div>
        </ReactCardFlip>
    )
}