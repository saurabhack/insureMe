import Cheers from "../Components/Cheers"
import ContentRun from "../Components/ContentRun"
import InsurancePlans from "../Components/InsurancePlans"
import MainSection from "../Components/MainSection"
import Mission from "../Components/Mission"
import Partners from "../Components/Partners"
import Unleashed from "../Components/Unleashed"

function Home(){
    return(
        <>
        <div>
        <MainSection/>
    <Partners/>
    <InsurancePlans/>
    <ContentRun/>
    <Unleashed/>
    <Mission/>
    <Cheers/>
        </div>
        </>
    )
}
export default Home