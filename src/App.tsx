import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Header';
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Pays from "./pages/Pays";
import PaysDetail from "./pages/PaysDetails";

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/"  element={<Landing />}/>
                <Route path="/pays"  element={<Pays />}/>
                <Route path="/pays/:cca2"  element={<PaysDetail />}/>
                <Route path="*"  element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
