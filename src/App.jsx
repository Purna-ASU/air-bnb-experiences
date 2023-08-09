import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from "./data";

function App() {

  const Details = Data.map ( dets => {
    return <Card 
      key = {dets.id}
      dets = {dets}
      />
  })

  return (
    <div className='whole'>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {Details}
      </section>
    </div>
  )
}

export default App
