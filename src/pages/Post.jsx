import Header from "../compnent/Header"
import {  useState } from "react";
 import axios from "axios"
 import { useNavigate } from "react-router-dom";

function Post (){

  
 
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
     const [image, setImage] = useState(null);
 
     const navigate =  useNavigate()
 
 
 
 
     const fileHandle = (event) => {
         setImage(event.target.files[0])
     }
 
     const createBlog = async (event) => {
 
         event.preventDefault()
 
         const formData = new FormData();
         formData.append("title", title)
         formData.append("description", description);
         formData.append("blogImage", image);
 
        try {
         await axios.post("http://localhost:2000/api/blog/create", formData, {
             headers: {
                 "Content-Type": "multipart/form-data"
             }
         });
         console.log("Uploaded");
         navigate("/")
 
 
        }catch(error){
         console.log(error)
        }
 
         alert("Uploaded");
     }

    return(
        <div>
            <Header/>
            <div className="write" >
    <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />

    <form className="writeForm" onSubmit={createBlog}>
    <div className="writeFormGroup">
    <label htmlFor="fileInput">
    <i className="writeIcon fas fa-plus"></i>
    </label>
    <input type="file" id="fileInput"  style={{ display: "none" }}
     onChange={fileHandle}
    />
    <input type="text" placeholder="Title" className="writeInput"
      autoFocus={true}
      onChange={event => {
        setTitle(event.target.value);
    }}
     />

    </div>
    <div className="writeFormGroup" >
    <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={event => {
              setDescription(event.target.value)
            }}
          />

    </div>
    <button className="writeSubmit" type="submit">
          Publish
        </button>

    </form>

    </div> 


     
     






        </div>
    )
}

export default Post
 

