export default function Form(){
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
                  <div className="mt-3">
                      <select name="cars" className="custom-select mb-3">
                        <option selected="">What are you?</option>
                        <option value="reader">Reader</option>
                        <option value="writer">Writer</option>
                      </select>
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
                    <a href="/">Register</a>
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