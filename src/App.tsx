import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "@components/Layout";

import Home from '@pages/Home';
import About from '@pages/About';
import Projects from '@pages/Projects';
import Garden from '@pages/Garden';
import Contact from '@pages/Contact';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
}

export default App;