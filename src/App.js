import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import LoginReg from "./components/pages/auth/LoginReg";
import Posts from "./components/pages/Posts";
import Users from "./components/pages/auth/Users";
import Signup from "./components/pages/Signup";


function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>} >
    <Route index element={<Home/>} />
    <Route path="posts" element={<Posts/>} />
    <Route path="signup" element={<Signup/>} />
    <Route path="users" element={<Users/>} />

    <Route path="contact" element={<Contact/>} />
    <Route path="login" element={<LoginReg/>}/>
  </Route>

</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
