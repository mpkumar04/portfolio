import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIQuestionnaire from './components/AIQuestionnaire';
import './index.css';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

const AIConsult = () => {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      <AIQuestionnaire />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-consult" element={<AIConsult />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
