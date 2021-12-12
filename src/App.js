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

  console.log('rerender has been made');

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
    dateOn:'Sun Dec 05 2021',
    reminder: false,  
    },
    {id:'2',
    title:'Just go away pls..',
    details:'No.. don\'t.. no need for this c\'mon..',
    dateOn:'Sun Dec 12 2021',
    reminder: false,  
    },
    {id:'5',
    title:'Just go away pls..',
    details:'No.. don\'t.. no need for this c\'mon..',
    dateOn:'Sun Dec 12 2021',
    reminder: false,  
    },
    {id:'6',
    title:'Aaaaaaaaaaaa..',
    details:'No.. No.. No.. No.. No.. No.. ',
    dateOn:'Sun Dec 12 2021',
    reminder: false,  
    },
    {id:'7',
    title:'Aaaaaaaaaaaa..',
    details:'No.. No.. No.. No.. No.. No.. ',
    dateOn:'Tue Dec 21 2021',
    reminder: false,  
    },
    {id:'3',
    title:'hrrhh hrhhh',
    details:'Just go away pls, Just go away pls, Just go away pls, Just go away pls, Just go away pls, Just go away pls, Just go away pls, Just go away pls, Just go away pls..',
    dateOn:'Sun Dec 05 2021',
    reminder: true, 
    },
    {id:'4',
    title:'Don\'t even try, man',
    details:'No.. don\'t.. no need for this c\'mon..No.. don\'t.. no need for this c\'mon..',
    dateOn:'Thu Dec 09 2021',
    reminder: false,  
    }
  ])

  const taskDate = date.toDateString();

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1;
    const dateOn = date.toDateString();
    console.log(dateOn);
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
                    taskDate={taskDate} 
                    date={date} 
                    tasks={tasks} 
                    onDelete={deleteTask} 
                    onToggle={toggleReminder} 
                    onAdd={addTask}
                    tileClass={({ date }) => tasks.map(task => date.toDateString() === task.dateOn ? 'theresTasks' : null)}
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
