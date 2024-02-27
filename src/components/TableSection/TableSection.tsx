import Title from "../Title/Title";
import fakeData from '../../FAKEDATA.json';
function TableSection(){
    return (
        <section className="tableSection">
          <Title>Lista</Title>
          <div className="tableContainer">
            {fakeData.map((film) => (
              <div className="tableRow" key={film.name}>
                <div className="tableCell">{film.name}</div>
                <div className="tableCell">{film.director}</div>
                <div className="tableCell">{film.genre}</div>
                <div className="tableCell">{film.duration}</div>
                <div className="tableCell">{film.avaliation}</div>
                <div className="tableCell">
                  <input
                    type="checkbox"
                    checked={film.favorite}
                    disabled
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
    )
}

export default TableSection;