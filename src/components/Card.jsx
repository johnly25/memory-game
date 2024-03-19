import ReactCardFlip from 'react-card-flip';
import background from '../assets/card-back.png'

export function Card(props) {
    function onClick(e) {
        e.preventDefault();
        props.setIsFlipped(true);
        
        if (!props.currentList.includes(e.target.src)) {
            props.setScore(props.score + 1); 
        } else {
            if (props.score > props.highscore) {
                props.setHighscore(props.score);
            } 
            props.setGameover(true);
        }
        setTimeout(() => {
            if (!props.currentList.includes(e.target.src)) {
                props.setCurrentList(oldArray => [...oldArray, e.target.src]);
            } else {
                props.setCurrentList([]);
            }
        }, 500);
    }

    return (
        <ReactCardFlip isFlipped={props.isFlipped} flipDirection="horizontal">
            <div className="card">
                <div className="image card-front" onClick={onClick}>
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