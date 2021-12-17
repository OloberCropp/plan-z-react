import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import SectionWelcome from './components/SectionWelcome';
import MainTasksSection from './components/MainTasksSection';
import SignUp from './components/SignUp/index';
import { AnimatePresence } from 'framer-motion';
import './App.css'


function App() {
  
  const [account, setAccount] = useState([]);
  const [date, setDate] = useState(new Date());
  const [isExist, setIsExist] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const userID = account.id ? account.id : 0;
  console.log(isExist);
  const userID = isExist ? 0 : 1;
  console.log(userID);
  
  const taskDate = date.toDateString();
  
  const close = () => setShowModal(false);
  const open = () => setShowModal(true);
  
  useEffect(() => {
    const getTasks = async () =>{ 
      const userData = await fetchUser();
      setTasks(userData.tasks);
      console.log('checking');
    }
    getTasks();
  }, [])
  console.log(account, ' JFLKJDGLKHSD');
  
  const fetchUser = async () => {
    const res = await fetch(`http://localhost:5000/users/${userID}`);
    const userData = await res.json();
    setAccount(userData);

    return userData;
  }
  
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${userID}`);
    const userData = await res.json();

    const userTask = userData.tasks.filter(task => task.id === id);

    return userTask[0];
  }

  const signUp = async (SignUpData) => {
    const res = await fetch(`http://localhost:5000/users`,
    {
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(SignUpData)
    });
    const userData = await res.json();
    setAccount(userData);
  }

  const addTask = async (task) => {
    const id = Math.floor(Math.random()*100000)+1
    const updUser = await fetchUser();
    const dateOn = taskDate;
    task = {...task, dateOn, id};
    updUser.tasks = [...tasks, task]

    fetch(`http://localhost:5000/users/${userID}`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(updUser)
    });

    tasks.length > 0 ? setTasks([...tasks, task]) : setTasks([task]);
  }

  const deleteTask = async (id) => {

    const updUser = await fetchUser();
    updUser.tasks = updUser.tasks.filter(task => task.id !== id);

    fetch(`http://localhost:5000/users/${userID}`,
    {method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updUser)
  
    })

    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const updUser = await fetchUser();
    const taskToToggle = await fetchTask(id);

    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder};
    updUser.tasks = updUser.tasks.map(task => task.id === id ? updTask : task); 
    
    fetch(`http://localhost:5000/users/${userID}`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(updUser)
      })

      setTasks(
        tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
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
                    //adding a class for each calendar day with tasks in it 
                    tileClass={({ date }) => tasks.length > 0 ? tasks.map(task => date.toDateString() === task.dateOn ? 'theresTasks' : null) : null}
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
      {showModal && <SignUp SignUpData={signUp} handleClose={close} />}
      </AnimatePresence>
    </Router>
  );
}

export default App;
