import Contacts from "@/components/contacts/contacts"
import Navbar from "@/components/Navbar/Navbar";
import Landingpage from "@/components/Herosection/landingpage"
import Logo2 from '@/components/Herosection/logo2'
import Courses from '@/components/Herosection/courses'
import Achivements from "@/components/Herosection/achivements";
import Coursedetails from "@/components/Herosection/course-details";
import Team from "@/components/Herosection/team";
import Footer from "@/components/Footer/footer";







export default function Home() {
  return (
    <div className="w-[1280px] h-[100vhpx] roboto.className" >
      <Contacts/>
      <Navbar/>
      <Landingpage/>
      <Logo2/>
      <Courses/>
      <Achivements/>      
      <Coursedetails/>
      <Team/>
      <Footer/>
      
      

    </div>
  );
}
