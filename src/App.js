import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MyApp from './pages/MyApp';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Messages from './pages/Messages';
import Calendar from './pages/Calendar';
function App() {
    

  return (
    <Router basename="/social-media-react">
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/myapp" element={<MyApp />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/friends" element={<Friends />}/>
        <Route path="/messages" element={<Messages />}/>
        <Route path="/calendar" element={<Calendar />}/>
      </Routes>
    </Router>
  );
}

export default App;
