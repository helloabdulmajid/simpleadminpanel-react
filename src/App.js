import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Layout from './pages/Layout'
import Posts from './pages/Posts'
import Signup from './pages/Signup'
import Login from './pages/Login'
import LoginReg from './pages/LoginReg'
import Users from './pages/Users'
import Contact from './pages/contact/Contact'
import Post from "./pages/Post";
import AddPost from "./pages/AddPost";








function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>} >
    <Route index element={<Home/>} />
    <Route path="posts" element={<Posts/>} />
    <Route path="post/:id" element={<Post/>} />
    <Route path="post/addpost" element={<AddPost/>} />


    <Route path="signup" element={<Signup/>} />
    <Route path="login" element={<Login/>} />

    <Route path="users" element={<Users/>} />

    <Route path="contact" element={<Contact/>} />
    <Route path="loginreg" element={<LoginReg/>}/>
  </Route>

</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
