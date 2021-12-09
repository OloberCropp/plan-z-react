import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import SectionWelcome from './components/SectionWelcome'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
            <Route 
            path='/'
            element={
                <>
                  <SectionWelcome />
                </>
              }
            />

            <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
