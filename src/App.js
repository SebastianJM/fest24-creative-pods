import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Result from './components/Result';
import Final from './components/Final';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/result" element={<Result />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
