import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MainSection from './Components/MainSection'
import InsurancePlans from './Components/InsurancePlans'
import Partners from './Components/Partners'
function App() {
  return (
    <>
    <div className="relative h-full overflow-y-auto antialiased">
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
    <MainSection/>
    <Partners/>
    <InsurancePlans/>
    </div>   
    </>
  )
}

export default App
