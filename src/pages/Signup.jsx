import { useState } from "react"
import { NavLink, } from "react-router-dom"
import Header from "../compnent/Header"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup (){

       const [name, setName] = useState()
       const [lastName, setLastName] = useState()
       const [email, setEmail] = useState()
       const [password, setPassword] = useState()
     
	   const navigate = useNavigate()
       
	   const handleSubmit = (e) =>{
		e.preventDefault()
		axios.post(`http://localhost:3001/register`,{name, lastName, email, password})
		.then(result => {console.log(result)
		
		}).then(()=>{
			alert("regersated succesfully")
			navigate("/login")
		})
		.catch(error =>console.log(error))
	   }



    return(
        <div>
             <Header/>

       <div className="signup_container">
	   <div className="signup_form_container">
		<div className="left">
		<h1>Welcome</h1>
				
	      <button type="button" className="white_btn"><NavLink to="/login">Sing in</NavLink></button>
				
			</div>
		<div className="right">
		<form className="form_container" onSubmit={handleSubmit}>
			<h1>Create Account</h1>
		<input type="text" placeholder="First Name" name="firstName" required className="input"
		onChange={(e) => setName(e.target.value)}
		/>

		<input type="text" placeholder="Last Name" name="lastName" required className="input"
		onChange={(e) => setLastName(e.target.value)}
		/>

		<input type="email"	placeholder="Email" name="email" required className="input"
		onChange={(e) => setEmail(e.target.value)}
		/>

		<input type="password" placeholder="Password" name="password" required className="input"
		onChange={(e) => setPassword(e.target.value)}
		/>
					
			<button type="submit" className="green_btn" >Sing Up</button>
                        
					</form>
				</div>
          
			
            </div>
            </div>
            </div>
		
  
    )
}

export default Signup