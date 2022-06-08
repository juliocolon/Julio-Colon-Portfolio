// DEPENDENCIES
import { Routes, Route, Navigate } from 'react-router-dom';

//Pages and components 
import Footer from "../../components/Footer/Footer"
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <NavBar />
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
