import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Technology from "./components/Technology.tsx";
import Experience from "./components/Experience.tsx";
import Project from "./components/Project.tsx";
import Contact from "./components/Contact.tsx";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Technology></Technology>
        <Experience></Experience>
        <Project></Project>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
