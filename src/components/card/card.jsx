import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`} alt="monster" />
        <h2> { props.monster.name } </h2>
        <h3> { props.monster.username } </h3>
        <p> { props.monster.email } </p>
    </div>
)