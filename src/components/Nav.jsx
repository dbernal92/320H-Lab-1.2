const styles = {
    display: "flex",
    alignItems: "center"
};

const linkStyles = {
    margin: "0 15px", // Adds spacing between links
};

function Nav() {
    return (
        <nav style={styles}>
            <a href="#" style={linkStyles}>Women's</a>
            <a href="#" style={linkStyles}>Men's</a>
            <a href="#" style={linkStyles}>On the Street</a>
            <a href="#" style={linkStyles}>The Catwalk</a>
            <a href="#" style={linkStyles}>AdWatch</a>
            <a href="#" style={linkStyles}>About</a>
        </nav>
    );
}

export default Nav;
