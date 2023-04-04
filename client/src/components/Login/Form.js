import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Form(){

  const {auth, onLoginSubmit} = useContext(AuthContext);

  
  

  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  function onValueChange(e){
    setFormValues(state=>({...state, [e.target.name]: [e.target.value]}))
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