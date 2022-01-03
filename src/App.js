import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout.jsx';
import About from './components/About';
import SectionWelcome from './components/SectionWelcome';
import MainTasksSection from './components/MainTasksSection';
import SignUp from './components/SignUp.jsx';
import LogIn from './components/LogIn';
import AddTask from './components/AddTask.js';
import FilesSection from './components/FilesSection';
import ContactsSection from './components/ContactsSection';
import Profile from './components/Profile';
import Settings from './components/Settings';


function App() {
  
  const notExist = {
    "status": "notExist",
    "tasks": "Cant add tasks without SignIn",
    "id": 0 
  }

  const [account, setAccount] = useState(notExist);
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [eventStatus, setEventStatus] = useState('');

  const [myContactsID, setMyContactsID] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [myChats, setMyChats] = useState([]);
  const [chat, setChat] = useState([]);
  const [selectedContactID, setSelectedContactID] = useState(0);

  const userID = account ? account.id : 0;
  const dateRN = date.toDateString();

  useEffect(() => {
    const getTasks = async () =>{ 
      const userData = await fetchUser();
      setTasks(userData.tasks);
    }
    getTasks();
  }, [account.id])
  
  useEffect(()=>{
    const getContacts = async () => {
      if(myContactsID){

        const userChats = await getMyChats();
        setMyChats(userChats);

        const contactsInfo = await Promise.all( myContactsID.map(async (contactID) => await fetchSomeUser(contactID)));
        setContacts(contactsInfo);
      }
    }
    getContacts();
  },[myContactsID]);
    
  useEffect(()=>{
    if(myChats && myChats.length > 0){
      const selectedChat = myChats.filter(chat => chat.membersID.includes(selectedContactID));
      console.log(selectedChat);
      if(selectedChat.length > 0){
        setChat(selectedChat[0].messages)
      }else{
        createChat();
        setChat([]);
      }
    }
    // setChat(myChats.length > 0 ? myChats[0].messages : []);
  }, [selectedContactID])
  
  const fetchUser = async () => {
    const res = await fetch(`http://localhost:5000/users/${userID}`);
    const userData = await res.json();
    setAccount(userData);
    setMyContactsID(userData.contactsID);
    return userData;
  }
  
  const fetchSomeUser = async (idOfUser) => {
    const res = await fetch(`http://localhost:5000/users/${idOfUser}`);
    const foundUser = await res.json();
    return foundUser;
  }
  
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${userID}`);
    const userData = await res.json();

    const userTask = userData.tasks.filter(task => task.id === id);

    return userTask[0];
  }

  const createChat = () => {
    const messages = [];
    const membersID = [userID, selectedContactID];
    const newChat = {messages, membersID};

    fetch(`http://localhost:5000/chats`,
    {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify(newChat)
    });
  };


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

  const logIn = async (logInData) => {
    const res = await fetch("http://localhost:5000/users");
    const usersList = await res.json();
    const userExist = await usersList.filter((user) => user.email === logInData.email);

    if(userExist.length < 1){
      setEventStatus('email')
    }else if(userExist[0].password.toLowerCase() !== logInData.password.toLowerCase()){
      setEventStatus('password');
    }else{
      setEventStatus('success')
      setAccount(userExist[0])
    }

  }

  const addTask = async (task) => {
    const id = Math.floor(Math.random()*100000)+1;
    const updUser = await fetchUser();
    const dateOn = dateRN;
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

  const getMyChats = async () => {
    const res = await fetch(`http://localhost:5000/chats?membersID_like=${userID}`);
    const chats = await res.json();
    return chats;
  }
  
  const sendMessage = async (setMessageData) => {
    const newChat = myChats.filter(element => element.membersID.includes(selectedContactID))[0];
    const id = Math.floor(Math.random()*10000)+1;
    newChat.messages = [...newChat.messages, {...setMessageData, id}]

    fetch(`http://localhost:5000/chats/${newChat.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newChat)
    });
    
    setChat(newChat.messages)
  }

  const signOut = () => {
    setAccount(notExist);
    setMyContactsID([]); 
    setContacts([]);
  }

  return (     

    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Layout account={account} showSignUp={()=>setShowModal(!showModal)} showLogIn={()=>setShowLogIn(!showLogIn)} signOut={signOut} /> }>
        {account.id !== 0 ?
        <>
          <Route path='/*' element={
              <>
                <MainTasksSection setDate={setDate} account={account} taskDate={dateRN} date={date} tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onAdd={addTask}
                  //adding a class for each calendar day with tasks in it 
                  tileClass={({ date }) => tasks.length > 0 ? tasks.map(task => date.toDateString() === task.dateOn ? 'theresTasks' : null) : null}/>      
              </>
            }
          >
            <Route path='addtask' element={<AddTask onAdd={addTask} />} />
          </Route>
          <Route path='files/*' element={<FilesSection />} />
          <Route path='contacts/*' element={<ContactsSection myID={account.id} setMessageData={sendMessage} getChat={chat} myChats={myChats} getContacts={contacts} onContactSelected={(id)=>setSelectedContactID(()=>id)} selection={selectedContactID} />} />
          <Route path='profile/*' element={<Profile account={account} />} />
          <Route path='settings/*' element={<Settings />} />
          <Route path='about/*' element={<About />} />
          <Route path='*' element={<Navigate to='/'/>} />
        </>
        :
        <>
          <Route path='welcome/*' element={<SectionWelcome onClick={() => setShowModal(!showModal)} />} />
          <Route path='about/*' element={<About />} />
          <Route path='*' element={<Navigate to='welcome' />} />          
        </>
        }
        </Route>

      </Routes>

      <AnimatePresence >
        {showModal && <SignUp SignUpData={signUp} handleClose={()=>setShowModal(false)} />}
        {showLogIn && <LogIn logInData={logIn} handleClose={()=>setShowLogIn(false)} />}
      </AnimatePresence>

    </BrowserRouter>
  );
}

export default App;
