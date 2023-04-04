import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Form(){

  const {setAuth} = useContext(AuthContext);

  const navigate = useNavigate();
  

  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  function onValueChange(e){
    setFormValues(state=>({...state, [e.target.name]: [e.target.value]}))
  }

  function onLoginSubmit(e){
    e.preventDefault();
    const baseUrl = 'http://localhost:3030/users/login';
    let values = new FormData(e.target);
    let { email, password } = Object.fromEntries(values);
        fetch(baseUrl, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
      })
      .then(res=>res.json())
      .then(data=>{
        if (data.code===403){
          setFormValues({
            email: "",
            password: ""
          })
          alert(data.message);
        } else{
          setAuth(data);
          navigate('/');
        }
      })
  }

    return (
        
        <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="touch_taital">
            <img src="images/icon-1.png" /> <span>Login</span>
          </h1>
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="email_text">
                <form onSubmit={onLoginSubmit} method="POST">
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Email"
                      name="email"
                      value={formValues.email}
                      onChange = {onValueChange}
                      />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="email-bt"
                      placeholder="Password"
                      name="password"
                      value={formValues.password}
                      onChange = {onValueChange}
                      />
                  </div>
                  <div className="send_btn">
                  <input type="submit" value="Login"/>
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