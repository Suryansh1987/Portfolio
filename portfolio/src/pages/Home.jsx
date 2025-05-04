import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContacSection";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Themetoggle } from "../components/Themetoggle";
import { Starbackground } from "../components/starbackground";
import { Herosection } from "../components/Herosection";

const Home = () => {




    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        <Themetoggle/>
        {/*background effects*/}
        <Starbackground/>
        {/*Navbar*/}
        <Navbar/>
       
       <main>
        <Herosection/>
        <AboutMe/>
        <SkillsSection/>
        <ProjectsSection />
        <ContactSection />
       </main>

       <Footer />
        {/**Footer*/}



    </div>;
};

export default Home;
