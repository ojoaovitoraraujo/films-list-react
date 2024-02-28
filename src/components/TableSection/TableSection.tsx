import Title from "../Title/Title";
import { getFilms } from "../../services/FilmsServices";
import { useEffect, useState } from "react";
import Film from "../../interfaces/IFilm";
import Modal from "../Modal/Modal";
import FilmForm from "../FilmForm/FilmForm";
import './TableSection.css';

function TableSection() {
  const [film, setFilms] = useState<Film[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(isOpen)
    fetchFilms();
  }, []);

  async function fetchFilms() {
    try {
      const response = await getFilms();
      setFilms(response.data);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  }

  return (
    <section className="tableSection">
      <Title>Lista</Title>
      <div className="tableContainer">
        {film.map((film) => (
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
      <button onClick={() => {
        setIsOpen(!isOpen);
      }} className="addFilmButton">Adicionar Filme
      </button>

      <Modal isOpen={isOpen} > <FilmForm/> </Modal>
    </section>
  )
}

export default TableSection;