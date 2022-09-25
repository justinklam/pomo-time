import { useState } from "react";
import "./app.css";

// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import SettingsContext from "./context/SettingsContext";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Timer from "./components/pages/Timer/Timer";
import SignUp from "./components/pages/SignUp/SignUp";
import Settings from "./components/Settings/Settings";

function App() {
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <SettingsContext.Provider
      value={{ workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes }}
    >
      <BrowserRouter>
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
            </Route>
            <Route path="/timer">
              <Route index element={<Timer />} />
            </Route>
            <Route path="/sign-up">
              <Route index element={<SignUp />} />
            </Route>
            <Route path="/settings">
              <Route index element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </SettingsContext.Provider>
  );
}

export default App;
