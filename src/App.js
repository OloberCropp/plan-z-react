import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import SectionWelcome from './components/SectionWelcome';
import MainTasksSection from './components/MainTasksSection';
import SignIn from './components/SignIn/index';
import { AnimatePresence } from 'framer-motion';
import './App.css'


function App() {
  
  const [date, setDate] = useState(new Date());
  const [isExist, setIsExist] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const close = () => setShowModal(false);
  const open = () => setShowModal(true);

  const taskDate = date.toDateString();

  useEffect(() => {
    const getTasks = async () =>{ 
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();

    return data;
  }
  
  const fetchTask = async (id) => {
    const res = await fetch('http://localhost:5000/tasks/'+id);
    const data = await res.json();

    return data;
  }

  const addTask = async (task) => {

    // const dateOn = date.toDateString();
    const dateOn = taskDate;
    task = {...task, dateOn};

    const res = await fetch('http://localhost:5000/tasks',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(task)
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  }

  const deleteTask = async (id) => {
    fetch('http://localhost:5000/tasks/'+id,
    { method: 'DELETE' })

    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder};

    const res = await fetch('http://localhost:5000/tasks/'+id,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(updTask)
      })

      const data = await res.json()

      setTasks(
        tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
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
                    onClick={() => (showModal ? close() : open())} 
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
      <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
      >
      {showModal && <SignIn handleClose={close} />}
      </AnimatePresence>
    </Router>
  );
}

export default App;
