import { Link } from "react-router-dom";

export default function CreateForm() {
  return (
    <>
            <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="touch_taital">
            <img src="images/icon-1.png" /> <span>Create</span>
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
                      placeholder="Name"
                      name="name"
                    />
                  </div>
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
                  <div className="form-group">
                    <input
                      type="password"
                      className="email-bt"
                      placeholder="Repeat password"
                      name="rePassword"
                      />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="massage-bt"
                      placeholder="Bio"
                      rows={5}
                      id="comment"
                      name="bio"
                      defaultValue={""}
                      />
                  </div>
                  <div className="send_btn">
                    <Link to={"/"}>Create</Link>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}