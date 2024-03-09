import { About } from "./components/About.tsx";
import { AboutServices } from "./components/AboutServices.tsx";
import { Contact } from "./components/contact/Contact.tsx";
import { Features } from "./components/Features.tsx";
import { Footer } from "./components/Footer.tsx";
import { Hero } from "./components/Hero.tsx";
import { Main } from "./components/Main.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { OurClients } from "./components/OurClients.tsx";
import { Services } from "./components/Services.tsx";


function App() {
  return (
    <>
      <Main />
      <Navbar />
      <Hero/>
      <Features />
      <About/>
      <AboutServices/>
      <Services/>
      <OurClients/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
