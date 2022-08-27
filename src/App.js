import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { auth } from "./firebase-config";
import Create from "./Pages/create";
import Home from "./Pages/home";
import SignUp from "./Pages/signup";

function App() {
  console.log(auth.currentUser);
  return (

        <Router>
          <Routes>
            <Route  path="/"  element={<Home/>} />
            <Route path="/create"  element={< Create/>} />
            <Route path="/signup"  element={< SignUp/>} />
          </Routes>
        </Router> 
  );
}

export default App;
