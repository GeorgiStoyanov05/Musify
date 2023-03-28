import { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function EditForm({id, song}){

    const baseUrl = 'http://localhost:3030/jsonstore/songs/'; 

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        name: `${song.name}`,
        singer: `${song.singer}`,
        genre: `${song.genre}`,
        imageUrl: `${song.imageUrl}`,
        description: `${song.description}`, 
    });


    function onValuesChange(e){
        setFormValues(state=>({...state, [e.target.name]: e.target.value}))
    }


    async function onEditSubmit(e){
        e.preventDefault();

        const form = new FormData(e.target);
        const {name, singer, genre, imageUrl, description} = Object.fromEntries(form); 
        let ob = {
            name,
            singer,
            genre,
            imageUrl,
            description
        }
        await Edit(ob);
    }

    async function Edit(ob){
        const res = await fetch(baseUrl+id, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(ob),
        });
        const data = await res.json();
        navigate(`/catalog`);
    }

    return (
        <>
                <div className="contact_section layout_padding">
            <div className="container">
              <h1 className="touch_taital">
                <img src="/images/icon-1.png" /> <span>Edit</span>
              </h1>
              <div className="contact_section_2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="email_text">
                    <form onSubmit={onEditSubmit}>
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
                        <input type="submit" value="Edit"/>
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