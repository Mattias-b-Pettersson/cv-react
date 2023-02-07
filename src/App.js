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
        path="/" 
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
      <Route
        path="*"
        element={<h1 className='mt-3 ms-3'>404 Page not found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
