import  {NavLink} from "react-router-dom"

function Header (){
    return(
        <div className="Header">
        <h1>Blog.Writ</h1>
        <div className="nav">
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/post/create">POST</NavLink> </li>
                <li><NavLink to="/blog">CONTEC US</NavLink> </li>
                <li><NavLink to="/login">LOGIN</NavLink></li>
            </ul>
        </div>
        </div>
    )
}


export default Header