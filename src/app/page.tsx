import CookieBanner from "@/components/CookieBanner";
import LiveChatWidget from "@/components/Livechat widget";
import ContactPopup from "@/components/contactPopUp";
import HeroSlider from "@/components/HeroSlider";
import Contact from "@/components/Contact";
import AboutUs from "@/components/AboutUs";
import Docs from "@/components/Docs";

import Clock from "@/components/Clock";
import StartCounter from "@/components/StartCounter";
import TeamComponent from "@/components/TeamComponent";
import Partner from "@/components/Partner";
import Policy from "@/components/Policy";
import ServiceComponent from "@/components/ServiceComponent";
import VacancyAlert from "@/components/VacancyAlert";


export default function Home() {
  return (
    <div>
      <HeroSlider/>
      <StartCounter />
      <AboutUs />
      <Contact />
      <ServiceComponent />
  
      <Clock />
      <TeamComponent />
      <Partner />
      <Docs />
      <Policy />
      
       
       <VacancyAlert />
      <ContactPopup />
      <LiveChatWidget />
      <CookieBanner />
    </div>
  );
}
