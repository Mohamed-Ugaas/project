import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Blog from "./pages/Blog";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import BlogDetails from "./pages/BlogDetails";


function App (){
    
    return(
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post/create" element={<Post/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="//blog/detail/:id" element={<BlogDetails/>} />
        </Routes>
    )
}

export default App