function Nav() {

    return (
        <nav className="mt-5" onClick={() => alert("clicked")} style={styles}>

            <a href="#">Women's</a>
            <a href="#">Men's</a>
            <a href="#">On the Street</a>
            <a href="#">The Catwalk</a>
            <a href="#">AdWatch</a>
            <a href="#">About</a>
        </nav>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

export default Nav;