import { About } from '../sections/About/components/About'
import Header from '../sections/Header/components/Header'
import '../styles/globals.css'
export default function App () {
  return (
    <div className='container'>
      <Header />
      <About />
    </div>
  )
}
