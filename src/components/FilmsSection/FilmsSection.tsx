import Card from "../Card/Card";
import Title from "../Title/Title";
import './FilsSection.css'

function FilmsSection() {
    return (
        <section className="filmsSection">
            <Title>Filmes</Title>
            <div className="card-container">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default FilmsSection;