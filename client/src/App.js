import "./app.css";
// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Timer from "./components/pages/Timer/Timer";
import Contact from "./components/pages/Contact/Contact";
import SignUp from "./components/pages/SignUp/SignUp";

function App() {
  return (
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
          <Route path="/contact">
            <Route index element={<Contact />} />
          </Route>
          <Route path="/sign-up">
            <Route index element={<SignUp />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
