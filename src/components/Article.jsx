/* eslint-disable react/prop-types */

function Article(props) {

    const {p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      contReading = "continue reading..."
  } = props

    return (
      <article>
        <h2>{props.date}</h2>
        <h2>{props.title}</h2>
  
        <img src={props.img} />
  
        <p>{p}</p>
        <a className="contReading" href="#">{contReading}</a>
        <hr></hr>
      </article>
    );
  }
  
  export default Article;