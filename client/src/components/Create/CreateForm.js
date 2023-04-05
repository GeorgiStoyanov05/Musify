import { Link, Redirect, useNavigate } from "react-router-dom";
import { useState} from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function CreateForm() {
  
const navigate = useNavigate();

const {accessToken} = useContext(AuthContext);

const [formValues, setFormValues] = useState({
    name: "",
    singer: "",
    genre: "",
    imageUrl: "",
    description: "",

});

const baseUrl = 'http://localhost:3030/data/songs';
const likesUrl = 'http://localhost:3030/jsonstore/likes';

async function PostCreate(ob){
  let res = await fetch(baseUrl,{
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'X-Authorization' : accessToken
    },
    body: JSON.stringify(ob)
  })
  let data = await res.json();
}

async function PostLikes(){
  let res = await fetch(likesUrl, {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      likes: 0,
      likedBy: [],
    })
  })
  let data = await res.json();

  return data._id;
}


function onValuesChange(e){
    setFormValues(state=>({...state, [e.target.name]: e.target.value}))
}

async function onCreateSubmit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const {name, singer, genre, imageUrl, description} = Object.fromEntries(form); 

    let message = "";
    let isGood = true;

    if (name==='' || singer==='' || genre==='' || imageUrl==='' || description===''){
      isGood = false;
      message+=`All fields must be filled!\n`;
    }
    if (imageUrl.substring(0,8)!=="https://"){
      isGood = false;
      message+=`Image Url is not in the correct format!\n`;
    }
    
    if (isGood){

      const likesId = await PostLikes();

      let ob = {
        name,
        singer,
        genre,
        imageUrl,
        description,
        likesId
      }

      await PostCreate(ob);
  
      setFormValues({
        name: "",
        singer: "",
        genre: "",
        imageUrl: "",
        description: "",
    });
  
    navigate('/catalog');
    } else {
      alert(message);
    }
}

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
                <form onSubmit={onCreateSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Song's name"
                      name="name"
                      value={formValues.name}
                      onChange = {onValuesChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Singer"
                      name="singer"
                      value={formValues.singer}
                      onChange = {onValuesChange}
                      />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Genre"
                      name="genre"
                      value={formValues.genre}
                      onChange = {onValuesChange}
                      />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="imageUrl"
                      name="imageUrl"
                      value={formValues.imageUrl}
                      onChange = {onValuesChange}
                      />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Description"
                      name="description"
                      value={formValues.description}
                      onChange = {onValuesChange}
                      />
                  </div>
                  <div className="send_btn">
                    <input type="submit" value="Create"/>
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