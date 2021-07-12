import React from 'react'
import MyApp from './App'
import Nav from './Components/Nav'
import About from './Components/About'
import Footer from './Components/Footer'
import Docs from './Components/Docs'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function Home() {
  return (
    <Router>
      <Nav />
      <Route path='/' exact component={MyApp} />
      <Route path='/jutsu' component={MyApp} />
      <Route path='/about' component={About} />
      <Route path='/docs' component={Docs} />
      <Footer />
    </Router>
  )
}

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
//   </div>
// );
export default Home
