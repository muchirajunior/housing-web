import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Create from "./Pages/create";
import Home from "./Pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={< Home/>} />
        <Route path="/create"  element={< Create/>} />
      </Routes>
    </Router> 

  );
}

export default App;
