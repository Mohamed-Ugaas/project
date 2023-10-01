import Header from "../compnent/Header"
import {FaLocationDot} from "react-icons/fa6"
import {CgMail} from "react-icons/cg"
import {IoIosCall} from "react-icons/io"
function Blog (){
    return(
     <div>
      <Header/>
   
    <div className="containerB">
      <span className="big-circleB"></span>
      <img src="" className="squareB" alt="" />
      <div className="formB">
        <div className="contact-infoB">
          <h3 className="titleB">Our information</h3>
          <p className="textB">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="infoB">
            <div className="informationB">
              <FaLocationDot className="iconB"  />
              <p>mogadisho-somalia</p>
            </div>
            <div className="informationB">
              <CgMail className="iconB"/>
              <p>tusaale@gmail.com</p>
            </div>
            <div className="informationB">
              <IoIosCall className="iconB"/>
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-mediaB">
            <p>Connect with us :</p>
            
            
          </div>
        </div>

        <div className="contact-formB">
          <span className="circle oneB"></span>
          <span className="circle twoB"></span>

          <form className="formC">
            <h3 className="titleB">Your information</h3>
            <div className="input-containerB">
              <input type="text" name="nameB" className="inputB" />
              <label >Username</label>
              <span>Username</span>
            </div>
            <div className="input-containerB">
              <input type="email" name="email" className="inputB" />
              <label >Email</label>
              <span>Email</span>
            </div>
            <div className="input-containerB">
              <input type="tel" name="phone" className="inputB" />
              <label >Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container-textareaB">
              <textarea name="message" className="inputB"></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btnB" />
          </form>
        </div>
      </div>
    </div> 



         </div>
     )
 }

export default Blog