import { BrowserRouter } from "react-router-dom";
import {About,Contact,Experience,Feedbacks,
  Hero,Navbar,Tech,Works,StarsCanvas} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div classname="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repea bg-center">
        <Navbar/> 
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App 

//remember do do: npm run build first. had a weird vite error there for a sec
