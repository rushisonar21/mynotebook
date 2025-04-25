import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import NotesState from './contexts/NotesState'
import AlertState from './contexts/AlertState'
import { Route, BrowserRouter as Router,Routes } from 'react-router'
import Alert from './components/alert'
import Signin from './components/Signin'
import Login from './components/Login'
import UserState from './contexts/UserState'

function App() {
  return (
    <>
    <AlertState>
    <UserState>
    <NotesState>
    <Router>
    <Navbar/>
    <Alert/>
    <div className='container'>
    <Routes>
      <Route exact path="/" element={<Home key="home"/>}></Route>
      <Route exact path='/myNotebook' element={<Home key="home"/>}></Route>
      <Route exact path='/myNotebook/Home' element={<Home key="home"/>}></Route>
      <Route exact path='/myNotebook/About' element={<About key="about"/>}></Route>
      <Route exact path='/myNotebook/Signin' element={<Signin key="sigin"/>}></Route>
      <Route exact path='/myNotebook/Login' element={<Login key="login"/>}></Route>
    </Routes>
    </div>  
    </Router>
    </NotesState>
    </UserState> 
    </AlertState> 
    </>
  )
}

export default App
