import Header from "../compnent/Header"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login (){
     
	const [email, setEmail] = useState()
    const [password, setPassword] = useState()

	const navigate = useNavigate()

	const handleSubmit1 = (e) =>{
		e.preventDefault()
		axios.post(`http://localhost:3001/login`,{email, password})
		.then(result => {
			console.log(result)
			if(result.data === "success"){
			
			}
		   
		}).then(()=>{
			alert("login succesfully")
			navigate("/")
		})
		.catch(error =>console.log(error))
	   }



    return(
        <div>
            <Header/>
           

           
<div className="login_container2">
	<div className="login_form_container2">
	<div className="left2">
	<form className="form_container2" onSubmit={handleSubmit1}>
	<h1>Login to Your Account</h1>
	<input type="email" placeholder="Email" name="email" require className="input2"
	onChange={(e) => setEmail(e.target.value)}
	/>

	<input type="password"placeholder="Password" name="password" required className="input2"
	 onChange={(e) => setPassword(e.target.value)}
	/>
		
		<button type="submit" className="green_btn2">Sing In</button>
					</form>
			</div>
		<div className="right2">
					<h1>New Here ?</h1>
					
				<button type="button" className="white_btn2"><NavLink to="/signup">Sing Up</NavLink></button>
					
				</div>
			</div>
		</div>


        </div>
    )
}

export default Login