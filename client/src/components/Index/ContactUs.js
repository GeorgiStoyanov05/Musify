import { useState } from "react";

 export default function ContactUs({songNames}){

    const contactUrl = 'http://localhost:3030/jsonstore/feedback';

    const [formValues, setFormValues] = useState({
     name: "",
     phoneNumber: "",
     email: "",
     song: "",
     message: ""
    })

    function onValueChange(e){
        setFormValues(state=>({...state, [e.target.name]: e.target.value}));
    }

    function onFormSubmit(e){
        e.preventDefault();
        const values = new FormData(e.target);
        const {name, phoneNumber, email, song, message} = Object.fromEntries(values);
        if (name && phoneNumber && email && song && message){
            if (Array.from(email).includes('@')){

                let ob = {
                    name, 
                    phoneNumber,
                    email,
                    song,
                    message
                }

                fetch(contactUrl, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(ob)
                })
                .then(res=>res.json())
                .then(data=>console.log(data))

                alert("Thank you for the feedback!");
                window.location.reload();
            }
            else{
                alert("Invalid email format!");
            }
            setFormValues({
                name: "",
                phoneNumber: "",
                email: "",
                song: "",
                message: ""
            });

        }
        else {
            alert("All fields must be filled!");
            setFormValues({
                name: "",
                phoneNumber: "",
                email: "",
                song: "",
                message: ""
            });
        }
    }


    return(
        <div className="contact_section layout_padding">
  <div className="container">
    <h1 className="touch_taital">
      <img src="images/icon-1.png" /> <span>Give feedback!</span>
    </h1>
    <div className="contact_section_2">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={onFormSubmit}>
          <div className="email_text">
            <div className="form-group">
              <input
                type="text"
                className="email-bt"
                placeholder="Name"
                name="name"
                value={formValues.name}
                onChange={onValueChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="email-bt"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={onValueChange}
                />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="email-bt"
                placeholder="Email"
                name="email"
                value={formValues.email}
                onChange={onValueChange}
                />
            </div>
            <div className="mt-3">
                <select name="song" className="custom-select mb-3">
                  {songNames
                    ?<>
                    <option selected="">Select a song</option>
                    {songNames.map(song=><option key = {song._id} value={song.name}>{song.name}</option>)}
                    </>
                    :<option selected="">Select a song</option>
                  }
                  </select>
            </div>
            <div className="form-group">
              <textarea
                className="massage-bt"
                placeholder="Message"
                rows={5}
                id="comment"
                name="message"
                value={formValues.message}
                onChange={onValueChange}
                />
            </div>
            <div className="send_btn">
                  <input type="submit" value="Send"/>
            </div>
          </div>
          </form>
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