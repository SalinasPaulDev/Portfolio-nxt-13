import Canva from '../components/Canva/Canva'
import { About } from '../sections/About/components/About'
import { Contact } from '../sections/Contact/components/Contact'
import { Experience } from '../sections/Experience/components/Experience'
import Header from '../sections/Header/components/Header'
import { Projects } from '../sections/Projects/components/Projects'
import '../styles/globals.css'
export default function App () {
  return (
    <>
      <Canva />
      <div className='container'>

        <Header />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  )
}
