import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout.jsx';
import About from './components/About';
import SectionWelcome from './components/SectionWelcome';
import MainTasksSection from './components/MainTasksSection';
import SignUp from './components/SignUp.jsx';
import { AnimatePresence } from 'framer-motion';
import './App.css'
import AddTask from './components/AddTask.js';


function App() {
  
  const [account, setAccount] = useState([]);
  const [date, setDate] = useState(new Date());
  const [isExist, setIsExist] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const userID = isExist ? 1 : 0;
  const taskDate = date.toDateString();

  const close = () => setShowModal(false);
  const open = () => setShowModal(true);
  
  
  console.log(`%cStatus ${account.status ? account.status : 'SignIn/undefined'}, and id is ${account.id}`, 'color:green; font-weight:bold; font-size:.9rem');
  
  useEffect(() => {
    const getTasks = async () =>{ 
      const userData = await fetchUser();
      setTasks(userData.tasks);
    }
    getTasks();
  }, [isExist])
  
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
    const id = Math.floor(Math.random()*100000)+1;
    const updUser = await fetchUser();
    const dateOn = taskDate;
    task = {...task, dateOn, id};
    updUser.tasks = [...tasks, task];

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

    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Layout onCheck={isExist} onChange={()=>setIsExist(!isExist)} /> }>
        {isExist ?
        <>
          <Route path='/*' element={
              <>
                <MainTasksSection setDate={setDate} account={account} taskDate={taskDate} date={date} tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onAdd={addTask}
                  //adding a class for each calendar day with tasks in it 
                  tileClass={({ date }) => tasks.length > 0 ? tasks.map(task => date.toDateString() === task.dateOn ? 'theresTasks' : null) : null}/>      
              </>
            }
          >
            <Route path='addtask' element={<AddTask onAdd={addTask} />} />
          </Route>
            
          <Route path='about/*' element={<About />} />
          <Route path='*' element={<Navigate to='/'/>} />
        </>
        :
        <>
          <Route path='welcome/*' element={<SectionWelcome onClick={() => (showModal ? close() : open())} />} />
          <Route path='about/*' element={<About />} />
          <Route path='*' element={<Navigate to='welcome' />} />          
        </>
        }
        </Route>

      </Routes>

      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null} >
        {showModal && <SignUp SignUpData={signUp} handleClose={close} />}
      </AnimatePresence>

    </BrowserRouter>
  );
}

export default App;
