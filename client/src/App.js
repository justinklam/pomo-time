import { useMemo, useState } from "react";
import "./app.css";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import SettingsContext from "./utils/SettingsContext";
import UserContext from "./utils/UserContext";

// Components
import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/pages/Home/Home";
import Timer from "./components/pages/Timer/Timer";
import Statistics from "./components/pages/Statistics/Statistics";
import SignUp from "./components/pages/SignUp/SignUp";
import Login from "./components/pages/Login/Login";
import Settings from "./components/Settings/Settings";

function App() {
  // User Context
  const [user, setUser] = useState(null);
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  // Settings Context
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <BrowserRouter>
      <UserContext.Provider value={userValue}>
        <SettingsContext.Provider
          value={{ workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes }}
        >
          <Navbar />
          <div className="main-container">
            <Routes>
              <Route path="/">
                <Route index element={<Timer />} />
              </Route>
              <Route path="/statistics">
                <Route index element={<Statistics />} />
              </Route>
              <Route path="/sign-up">
                <Route index element={<SignUp />} />
              </Route>
              <Route path="/login">
                <Route index element={<Login />} />
              </Route>
              <Route path="/settings">
                <Route index element={<Settings />} />
              </Route>
            </Routes>
          </div>
        </SettingsContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
