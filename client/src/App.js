import "./app.css";
// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Timer from "./pages/Timer";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
      <div className="main">Main Area</div>
    </BrowserRouter>
  );
}

export default App;
