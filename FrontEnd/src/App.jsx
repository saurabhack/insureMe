import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MainSection from './Components/MainSection'
import InsurancePlans from './Components/InsurancePlans'
import Partners from './Components/Partners'
import ContentRun from './Components/ContentRun'
import Unleashed from './Components/Unleashed'
import Mission from './Components/Mission'
import Cheers from './Components/Cheers'
import Footer from './Components/Footer'
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
    <ContentRun/>
    <Unleashed/>
    <Mission/>
    <Cheers/>
    <Footer/>
    </div>   
    </>
  )
}

export default App
