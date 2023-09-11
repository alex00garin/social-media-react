import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MyApp from './pages/MyApp';

function App() {
  return (
    <Router basename="/social-media-react"> {/* Update the basename */}
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/myapp" element={<MyApp />} />
      </Routes>
    </Router>
  );
}

export default App;
