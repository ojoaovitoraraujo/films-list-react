import './Card.css';

type CardProps = {
  name: string;
  director?: string;
  duration?: number;
  image?: string;
}
function Card(props: CardProps){
    return(
      <div className="card">
        <img src={props.image} alt="img" />
        <div className="card-info">
          <div className="infos">
            <h3>{props.name}</h3>
            <p>{props.director}</p>
          </div>
          <p className="duration">{props.duration}</p>
        </div>
      </div>
    )
}

export default Card;