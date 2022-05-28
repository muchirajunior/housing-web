import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"> < Home /> </Route>
      </Routes>
    </Router>
   
   
  );
}

export default App;
