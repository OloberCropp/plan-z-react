import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
            <Route />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
