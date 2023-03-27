export default function ContactUs(){
    return(
        <div className="contact_section layout_padding">
  <div className="container">
    <h1 className="touch_taital">
      <img src="images/icon-1.png" /> <span>Get In touch</span>
    </h1>
    <div className="contact_section_2">
      <div className="row">
        <div className="col-md-6">
          <div className="email_text">
            <div className="form-group">
              <input
                type="text"
                className="email-bt"
                placeholder="Name"
                name="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="email-bt"
                placeholder="Phone Number"
                name="Email"
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
            <div className="mt-3">
              <form>
                <select name="cars" className="custom-select mb-3">
                  <option selected="">Select a song</option>
                  <option value="volvo">Volvo</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </form>
            </div>
            <div className="form-group">
              <textarea
                className="massage-bt"
                placeholder="Message"
                rows={5}
                id="comment"
                name="Message"
                defaultValue={""}
                />
            </div>
            <div className="send_btn">
              <a href="#"  type="button">SEND</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_main">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                width={600}
                height={400}
                frameBorder={0}
                style={{ border: 0, width: "100%" }}
                allowFullScreen=""
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}