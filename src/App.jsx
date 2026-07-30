import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";


function Home(){
  return <h1>Hospital Home</h1>
}

function App(){

return (

  <BrowserRouter>
  <Routes>

  <Route
    path="/login"
    element={<Login/>}
  />

  <Route
    path="/signup"
    element={<Signup/>}
  />

  <Route
    path="/"
    element={
  <ProtectedRoute>
    <Home/>
  </ProtectedRoute>

}
/>

  </Routes>
  </BrowserRouter>
)
}

export default App;