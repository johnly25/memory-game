import '../styles/Scores.css'

export function Scores(props) {
    return (
        <div className="scores">
            <h2>
                Score: {props.score}
            </h2>
            <h2>
                Highscore: {props.highscore}
            </h2>
        </div>
    )
}