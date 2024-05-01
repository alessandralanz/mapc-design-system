import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import AboutPage from "./pages/AboutPage.jsx";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/about" element={<AboutPage/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;