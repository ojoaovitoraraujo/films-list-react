import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Title from "../Title/Title";
import './FilmsSection.css'
import { getFavoriteFilms, getFilms } from "../../services/FilmsServices";
import Film from "../../interfaces/IFilm";

function FilmsSection(props: any) {
    const [films, setFilms] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchFilms();
    }, []);

    async function fetchFilms(){
        const filmsAPI = await getFilms();
        setFilms(filmsAPI.data);
        if(props.title === 'Favoritos'){
            fetchFavorites();
        }
    }

    async function fetchFavorites(){
        const favoritesAPI = await getFavoriteFilms();
        setFilms(favoritesAPI.data);
    }
    
    
    return (
        <section className="filmsSection">
            <Title>{props.title ? props.title : 'Filmes'}</Title>
            <div className="card-container">
                {films.map((film: Film) => {
                    return (
                        <Card
                            key={film.id}
                            name={film.name}
                            director={film.director}
                            duration={film.duration}
                            image={film.image}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default FilmsSection;