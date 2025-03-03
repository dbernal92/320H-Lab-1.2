import Header from './components/Header'
import Nav from './components/Nav'
import Article from './components/Article'
import imgRed from './assets/blog-red_dress.jpg'
import imgGroup from './assets/blog-group.jpg'
import './App.css'

function App() {


  return (
    <>
    <Header />
      <Nav />
      <Article date="11/12/20" title="On the Street in Brooklyn" img={imgRed}/>
      <Article date="11/11/20" title="Vintage in Vogue" img={imgGroup}/>
    </>
  )
}

export default App
