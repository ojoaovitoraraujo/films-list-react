import axios from "axios";
import Film from "../interfaces/IFilm";

const filmsAPI = axios.create({ baseURL: "http://localhost:3000" })

function getFilms() {
    return filmsAPI.get("/films");
}

function getFilmById(id: string) {
    return filmsAPI.get("/films/" + id);
}

function getFavoriteFilms() {
    return filmsAPI.get("/favorites");
}

function addFilm(film: Film[]) {
    return filmsAPI.post("/films",  film );
}

function removeFilm(id: string) {
    return filmsAPI.delete("/films/" + id);
}

function updateFilm(film: string) {
    return filmsAPI.put("/films" + film);
}

export { getFilms, getFilmById, getFavoriteFilms, addFilm, removeFilm, updateFilm };