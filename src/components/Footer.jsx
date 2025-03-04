const styles = {
  display: "flex",
  alignItems: "center"
};

const linkStyles = {
  margin: "0 15px", // Adds spacing between links
};

function Footer() {
  return (
    <div><footer style={styles}>
      <a href="#" style={linkStyles}>Women's</a>
      <a href="#" style={linkStyles}>Men's</a>
      <a href="#" style={linkStyles}>On the Street</a>
      <a href="#" style={linkStyles}>The Catwalk</a>
      <a href="#" style={linkStyles}>AdWatch</a>
      <a href="#" style={linkStyles}>About</a>
    </footer>
    <p>
        <br></br>
        &copy; Per Scholas Got Me Tired
      </p>
    </div>
  );
}

export default Footer
