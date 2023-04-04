import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";

export default function Form(){

 const {auth, onRegisterSubmit} = useContext(AuthContext);

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