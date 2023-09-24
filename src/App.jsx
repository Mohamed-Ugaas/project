import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Design from "./pages/Design";
import Blog from "./pages/Blog";
import About from "./pages/About"

function App (){
    return(
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/design" element={<Design/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
    )
}

export default App