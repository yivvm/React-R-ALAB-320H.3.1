import Score from './Score';

export default function Learner (props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.bio}</p>
            <h3>Scores:</h3>
            {props.scores.map((score, index) => (
                <Score key={index} date={score.date} score={score.score}/>
            ))}
        </div>
    )
}