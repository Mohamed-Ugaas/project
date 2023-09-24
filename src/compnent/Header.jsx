import  {NavLink} from "react-router-dom"

function Header (){
    return(
        <div className="Header">
        <h1>Fitness.Blog</h1>
        <div className="nav">
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/design">CREATE POST</NavLink> </li>
                <li><NavLink to="/blog">CONTEC US</NavLink> </li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
            </ul>
        </div>
        </div>
    )
}


export default Header