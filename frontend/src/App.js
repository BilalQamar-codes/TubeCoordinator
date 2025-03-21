import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboards/Dashboard";
import OwnerDashboard from "./pages/Dashboards/OwnerDashboard";
import EditorDashboard from "./pages/Dashboards/EditorDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/owner" element={<OwnerDashboard />} />
        <Route path="/dashboard/editor" element={<EditorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
