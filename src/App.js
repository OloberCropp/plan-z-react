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
  const [isExist, setIsExist] = useState(false);
  // const [calendarRange, setCalendarRange] = useState();
  // console.log(calendarRange);

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
    title:'4th aug at 11am',
    details:'Shut the fuck up aaaaaam Shut the fuck up Shut the fuck up Shut the fuck aaammm up Shut the fuck up Shut the fuck up Shut the fuck up',
    dateOn:'4th aug at 11am',
    reminder: false,  
    },
    {id:'2',
    title:'Just go away pls..',
    details:'No.. don\'t.. no need for this c\'mon..',
    dateOn:'5th aug at 4pm',
    reminder: false,  
    },
    {id:'3',
    title:'hrrhh hrhhh',
    details:'Just go away pls, Just go away pls, Just go away pls, Just go away pls, Just go away pls, Just go away pls, Just go away pls, Just go away pls, Just go away pls..',
    dateOn:'5th aug at 4pm',
    reminder: true, 
    },
    {id:'4',
    title:'Don\'t even try, man',
    details:'No.. don\'t.. no need for this c\'mon..No.. don\'t.. no need for this c\'mon..',
    dateOn:'5th aug at 10pm',
    reminder: false,  
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1;
    const dateOn = date.toDateString();
    setTasks([...tasks, {id, ...task, dateOn}]) ;
  }

  const deleteTask = (id) => {
    setTasks(
      tasks.filter(task => task.id !== id)
    )
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }

  return (     

    <Router>
      <div className="App">
        <div className="top-line" style={{height:'1px'}} />
        <Header onCheck={isExist} onChange={()=>setIsExist(!isExist)} />
        <Routes>
            <Route 
            path='/*'
            element={
                <>
                  <SectionWelcome 
                    onClick={getStarted} 
                  />

                  <MainTasksSection 
                    setDate={setDate} 
                    date={date} 
                    tasks={tasks} 
                    onDelete={deleteTask} 
                    onToggle={toggleReminder} 
                    onAdd={addTask}
                    // calendarRange={()=>setCalendarRange(calendarRange)}
                  />
                  
                </>
              }
            />
            
            <Route path='/about/*' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
