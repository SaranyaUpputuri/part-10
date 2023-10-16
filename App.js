import Mybar from "./ui/Mybar";
import { BrowserRouter, Router ,Route } from "react-router-dom";
import Home from "./ui/Home";
import Display from "./ui/Display";
import Users from "./ui/User";
function App() {
    return (
    <BrowserRouter>
    <Mybar />
    <Router>
      <Route path="/ "element={<Home/>}>Home</Route>
      <Route path="/display"element={<Display/>}>Display</Route>
      <Route path="/user"element={<Users/>}>User</Route>
      </Router>
    </BrowserRouter>
  
    );
  }
  
  export default App;