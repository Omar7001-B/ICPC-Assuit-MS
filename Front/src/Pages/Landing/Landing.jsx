import AboutUs from "../../components/AboutUs/AboutUs";
import ContactUs from "../../components/ContactUS/ContactUs";
import Developers from "../../components/Developers/Developers";
import FooterOfLandingPage from "../../components/FooterOfLandingPage/FooterOfLandingPage";
import Founders from "../../components/Founders/Founders";
import IntroLanding from "../../components/IntroLanding/IntroLanding";
import NavBar from "../../components/NavBar/NavBar";

export default function Landing(){
    return(
        <>
        <NavBar/>
        <div>
            <IntroLanding/>
            <AboutUs/>
            <Founders/>
            <Developers/>
            <ContactUs/>
            <FooterOfLandingPage/>
        </div>
        </>
    )
}