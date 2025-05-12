import { Routes, Route } from "react-router-dom";
import StatusContext from "./contexts/statusContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/home/Dashboard";
import Profile from "./pages/dashboard/profile/Profile";
import Application from "./pages/dashboard/application/Application";
import Schedule from "./pages/dashboard/schedule/Schedule";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <StatusContext>
            <Dashboard />
          </StatusContext>
        }
      />
      <Route
        path="/dashboard/profile"
        element={
          <StatusContext>
            <Profile />
          </StatusContext>
        }
      />
      <Route
        path="/dashboard/schedule"
        element={
          <StatusContext>
            <Schedule />
          </StatusContext>
        }
      />
      <Route
        path="/dashboard/application"
        element={
          <StatusContext>
            <Application />
          </StatusContext>
        }
      />
    </Routes>
  );
}

export default App;
