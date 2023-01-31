import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
        path="/cv-react" 
        element={
          <>
          <LandingPage />
          <About />
          <Resume />
          <Portfolio />
          <Contact />
          </>
        } 
        />
      </Routes>
    </div>
  );
}

export default App;
