import './Header.css'
function Header(){
    return(
        <header className="app-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/UOL_logo.png" alt="img logo" />
            <nav className="main-navigation">
            <a href="#">Filmes</a>
            <a href="#">Favoritos</a>
            <a href="#">Assistidos</a>
            </nav>
        </header>
    )
}

export default Header;