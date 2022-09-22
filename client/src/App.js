import "./app.css";
// React Router Dom
import { BrowserRouter } from "react-router-dom";
// Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">Main Area</div>
    </BrowserRouter>
  );
}

export default App;
