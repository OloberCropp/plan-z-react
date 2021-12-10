import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import SectionWelcome from './components/SectionWelcome';
import MainTasksSection from './components/MainTasksSection';


import './App.css'


function App() {
  
  const [date, setDate] = useState(new Date());
  const [isExist, setIsExist] = useState(false)
  // const isExist = true;
  console.log(date);
  
  const getStarted = () =>{
    if(isExist){
      alert('getStarted() should bring taskalendar')
    }else{
      alert('getStarted() should bring sign-in menu');
    }
    console.log(`user exist? ${isExist}`);
  }

  const [tasks, setTasks] = useState([
    {id:'1',
    text:'Shut the fuck up',
    date:'4th aug at 11am',
    reminder: false,  
    },
    {id:'2',
    text:'Just go away pls..',
    date:'5th aug at 4pm',
    reminder: false,  
    },
    {id:'3',
    text:'Just go away pls..',
    date:'5th aug at 4pm',
    reminder: false,  
    },
    {id:'4',
    text:'Just go away pls..',
    date:'5th aug at 4pm',
    reminder: false,  
    },
    {id:'5',
    text:'Don\t even try, man',
    date:'5th aug at 10pm',
    reminder: false,  
    }
  ])

  const deleteTask = () => {
    console.log('ssss');
  }

  const setReminder = () => {
    console.log('aaaaaaa');
  }

  return (     

    <Router>
      <div className="App">
        <div className="top-line" style={{height:'1px'}} />
        <Header onCheck={isExist} onChange={()=>setIsExist(!isExist)} />
        <Routes>
            <Route 
            path='/'
            element={
                <>
                  <SectionWelcome onClick={getStarted} />
                  <MainTasksSection setDate={setDate} date={date} tasks={tasks} onDelete={deleteTask} onToggle={setReminder} />
                  
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
