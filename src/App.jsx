
import RegistrationForm from './components/Registrationform'
import LoginForm from './components/login'
import { Link ,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import GlobalPosts from './components/GlobalPosts'
import SingleGlobalPost from './components/SingleGlobalPost'
import Users from './components/Users'
import Profile from './components/Profile'
function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/updateprofile" element={<ProfileForm />} /> */}
        <Route path="/home" element={<GlobalPosts />} />
        <Route path="/post/:id" element={<SingleGlobalPost />} />
        <Route path="/users" element={<Users />} />
         <Route path="/profile" element={<Profile/>} />
      </Routes>

    </div>
  )
}

export default App
