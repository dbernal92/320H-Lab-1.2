import Header from './components/Header'
import Nav from './components/Nav'
import Article from './components/Article'
import imgRedDress from "./assets/blog-red_dress.jpg"
import imgGroup from "./assets/blog-group.jpg"
import './App.css'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header />
      <Nav />
      <Article
        date="11/12/20"
        title="On the Street in Brooklyn"
        img={imgRedDress} />
      <Article
        date="11/11/20"
        title="Vintage in Vogue"
        img={imgGroup} />
        <Footer/>
    </>
  )
}

export default App
