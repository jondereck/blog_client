import { useState } from 'react';
import { Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserContextProvider } from './UserContext';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import EditPost from './components/EditPost';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
   <UserContextProvider>
     <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className=" text-black dark:text-white bg-white dark:duration-500 duration-500 dark:bg-black">
        <Routes>
          <Route path="/" element={<Home className=" text-black dark:text-white bg-white dark:duration-500 duration-500 dark:bg-black" />} />
          <Route  path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreatePost/>}/>
          <Route path="/post/:id" element={<Post/>}/>
          <Route path="/edit/:id" element={<EditPost/>} />
        </Routes>
      </main>
    </div>
   </UserContextProvider>
  );
}

export default App;
