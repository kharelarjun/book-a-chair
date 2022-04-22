import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {LayoutPage} from "./pages/LayoutPage";
import {HomePage} from "./pages/HomePage";

function App() {
    return (
        <Router>
            <nav>
                <Link style={{marginRight: 5}} to="/">Home</Link>
                <Link to="/layout">Layout</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/layout" element={<LayoutPage />} />
            </Routes>
        </Router>

    )
}

export default App;
