import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Create from "./Pages/create";
import Home from "./Pages/home";
import Register from "./Pages/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={< Home/>} />
        <Route path="/create"  element={< Create/>} />
        <Route path="/signup"  element={< Register/>} />
      </Routes>
    </Router> 

  );
}

export default App;
