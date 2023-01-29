import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
