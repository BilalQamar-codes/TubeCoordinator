import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import Signup from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
