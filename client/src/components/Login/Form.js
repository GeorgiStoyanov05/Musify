import { Link } from "react-router-dom";

export default function Form(){
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
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Email"
                      name="Email"
                      />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="email-bt"
                      placeholder="Password"
                      name="password"
                      />
                  </div>
                  <div className="send_btn">
                    <Link to={"/"}>LOGIN</Link>
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