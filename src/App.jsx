import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import AllExperience from './components/experienceSection/AllExperience';
import HelperSection from './components/HelperSection';
import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain';
import NavBarMain from './components/navbar/NavbarMain';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectsMain from './components/projectsSections/ProjectsMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';
import SubHeroSection from './components/heroSection/SubHeroSection';


function App() {
  return (
    <>
      <main className='font-body'> 
        <NavBarMain/>
        <HeroMain/>
        <HeroGradient/>
        <AboutMeMain/>
        <SkillsMain/>
        <SubHeroSection/>
        <SubSkills/>
        <ExperienceMain/>
        <ProjectsMain/>
        <ContactMeMain/>  
        <FooterMain/>
        <HelperSection/>
      </main>
    </>
  );
}

export default App;
