import '../styles/Scores.css'

export function Scores(props) {
    return (
        <div className="scores">
            <h2>
                Score: {props.game.score}
            </h2>
            <h2>
                Highscore: {props.game.highscore}
            </h2>
        </div>
    )
}