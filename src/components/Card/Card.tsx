import './Card.css';

function Card(){
    return(
      <div className="card">
        <img src="https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="img" />
        <div className="card-info">
          <div className="infos">
            <h3>Matrix 4</h3>
            <p>Nome do diretor</p>
          </div>
          <p className="duration">127min</p>
        </div>
      </div>
    )
}

export default Card;