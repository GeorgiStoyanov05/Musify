import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form(){

 const {setAuth} = useContext(AuthContext);

 const navigate = useNavigate();

 const [formValues, setFormValues] = useState({
  name: "",
  email: "",
  password: "",
  rePassword: "",
  bio: ""
 })

 function onFormChange(e){
  setFormValues(state=>({...state, [e.target.name]:e.target.value}))
 }


 async function onRegisterSubmit(e){
  e.preventDefault();
  const baseUrl = 'http://localhost:3030/users/register';
  const values = new FormData(e.target);
  const {name, email, password, rePassword, bio} = Object.fromEntries(values);
  let message = ""
  let regIsGood = true;

  if (name.length<=1){
	regIsGood = false; 
	message+=`Name must be longer than 1 character!\n`
	setFormValues({
		name: "",
		email: "",
		password: "",
		rePassword: "",
		bio: ""
	   });
  }  if (!Array.from(email).includes('@')){
	regIsGood = false; 
	message+=`Invalid email format!\n`
	setFormValues({
		name: "",
		email: "",
		password: "",
		rePassword: "",
		bio: ""
	   });
  }
  if (password!==rePassword){
	regIsGood = false; 
	message+=`Passwords do not match!`
	setFormValues({
		name: "",
		email: "",
		password: "",
		rePassword: "",
		bio: ""
	   });
  } 
  
 if (!regIsGood){
	alert(message);
 } else {
	const res = await fetch(baseUrl, {
		method: "POST",
		headers: {
		  'content-type': 'application/json'
		},
		body: JSON.stringify({name, email, password, bio})
	  })
	  const data = await res.json();
	  setAuth(data);
	  navigate('/');
  }
}


    return (
        <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="touch_taital">
            <img src="images/icon-1.png" /> <span>Register</span>
          </h1>
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="email_text">
                <form onSubmit={onRegisterSubmit} method="POST">
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Name"
                      name="name"
                      value={formValues.name}
                      onChange={onFormChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Email"
                      name="email"
                      value={formValues.email}
                      onChange={onFormChange}
                      />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="email-bt"
                      placeholder="Password"
                      name="password"
                      value={formValues.password}
                      onChange={onFormChange}
                      />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="email-bt"
                      placeholder="Repeat password"
                      name="rePassword"
                      value={formValues.rePassword}
                      onChange={onFormChange}
                      />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="massage-bt"
                      placeholder="Bio"
                      rows={5}
                      id="comment"
                      name="bio"
                      value={formValues.bio}
                      onChange={onFormChange}
                      />
                  </div>
                  <div className="send_btn">
                  <input type="submit" value="Register"/>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}