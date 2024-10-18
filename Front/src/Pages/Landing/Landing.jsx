import AboutUs from "../../components/AboutUs/AboutUs";
import ContactUs from "../../components/ContactUS/ContactUs";
import Developers from "../../components/Developers/Developers";
import FooterOfLandingPage from "../../components/FooterOfLandingPage/FooterOfLandingPage";
import Founders from "../../components/Founders/Founders";
import IntroLanding from "../../components/IntroLanding/IntroLanding";
import NavBarLanding from "../../components/NavBarLanding/NavBarLanding";

export default function Landing(){
    return(
        <>
        <NavBarLanding/>
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