import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { AuthContextProvider } from "./auth-context";
import { auth } from "./firebase-config";
import Create from "./Pages/create";
import Home from "./Pages/home";
import SignUp from "./Pages/signup";

function App() {
  return (
    <AuthContextProvider>
        <Router>
          <Routes>
            <Route  path="/"  element={ auth.currentUser !== null ? <Home/> : <Navigate to="/signup" replace />} />
            <Route path="/create"  element={< Create/>} />
            <Route path="/signup"  element={< SignUp/>} />
          </Routes>
        </Router> 
    </AuthContextProvider>

  );
}

export default App;
