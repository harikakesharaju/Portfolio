import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'

function App() {
 

  return (
    <div className={styles.App}>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
    <Project></Project>
    <Contact></Contact>
    </div>
  )
}

export default App
