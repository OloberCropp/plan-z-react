import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import SectionWelcome from './components/SectionWelcome'
import SectionRecent from './components/SectionRecent'


import './App.css'


function App() {
  
  const [isExist, setIsExist] = useState(false)
  // const isExist = true;
  
  console.log(isExist);
  
  const getStarted = () =>{
    if(isExist){
      alert('getStarted() should bring taskalendar')
    }else{
      alert('getStarted() should bring sign-in menu');
    }
  }

  return (
    <Router>
      <div className="App">
        <Header onCheck={isExist} onChange={()=>setIsExist(!isExist)} />
        <Routes>
            <Route 
            path='/'
            element={
                <>
                  <SectionWelcome onClick={getStarted} />
                  <SectionRecent />
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
