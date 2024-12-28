import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Manage from "../../components/manage/Manage";
import SpecialMedia from "../../components/specialMedia/SpecialMedia";
import NotSure from "../../components/notSure/NotSure";
import ServiceCards from "../../components/serviceCard/ServiceCards";
import Convinced from "../../components/convinced/Convinced";
import Letter from "../../components/newsletter/Letter";
import Footer from "../../components/footer/Footer";
 
export default function Home() {

  // border-2 border-black 


  return (
    <div className="container min-w-full  font-sans xl:text-lg">
      <Navbar />
      <Header/>
      <Manage/>
      <SpecialMedia/>
      <NotSure/>
      <ServiceCards/>
      <Convinced/>
      <Letter/>
      <Footer/>
    </div>
  );
}