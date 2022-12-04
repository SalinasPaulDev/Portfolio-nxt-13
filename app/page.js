import { About } from '../sections/About/components/About'
import { Experience } from '../sections/Experience/components/Experience'
import Header from '../sections/Header/components/Header'
import { Projects } from '../sections/Projects/components/Projects'
import '../styles/globals.css'
export default function App () {
  return (
    <div className='container'>
      <Header />
      <About />
      <Projects />
      <Experience />
    </div>
  )
}
