import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function SongDetails({id}){

    const {_id, accessToken} = useContext(AuthContext);

    const baseUrl = 'http://localhost:3030/data/songs/'
    const likesUrl = 'http://localhost:3030/jsonstore/likes/'

    const navigate = useNavigate();

    const [song, setSong] = useState({});
    const [likes, setLikes] = useState({
      likedBy: []
    });
    const [isLiked, setIsLiked] = useState(false);

    useEffect(()=>{
      fetch(baseUrl+id)
      .then(res=>res.json())
      .then(data=>{setSong(data)});

      
    }, [])

    useEffect(()=>{
      fetch(likesUrl+song.likesId)
      .then(res=>res.json())
      .then(data=>{setLikes(data)})
    }, [song])

    useEffect(()=>{
      
       fetch(likesUrl+song.likesId, {
        method: 'PUT',
        headers: {
          "content-type" : "application/json",
        },
        body: JSON.stringify(likes)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))

    }, [likes])
    
   async function onDeleteClick(e){
        await fetch(baseUrl+id, {
        method: "DELETE",
        headers: {
          'content-type': 'application/json',
          'X-Authorization': accessToken
        }
      })
      navigate('/catalog');
    }

    async function onLikeClick(){
      setIsLiked(true);
      let arr = likes.likedBy;
      arr.push(_id);
        setLikes(state=>({...state, likes: state.likes+1, likedBy: arr}));
    }

    async function onDislikeClick(){
      setIsLiked(false);
      let arr = likes.likedBy;
      arr = arr.filter(id=>id!==_id);
      setLikes(state=>({...state, likes: state.likes-1, likedBy: arr}));
    }

    return (
        <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="about_taital">
                <img src="/images/icon-1.png" /> <span>{song.name}</span>
              </h1>
              <p className="about_text_2">
                Artist: {song.singer}
              </p>
              <p className="about_text_2">
                Genre: {song.genre}
              </p>
              <p className="about_text_2">
                Description: {song.description}
              </p>
              <p className="about_text_2">
                Likes: {likes.likes}
              </p>
              <div className="read_bt">
                <Link to={'/catalog'}>Back</Link>
              </div>
              {(accessToken && song._ownerId!==_id && !likes.likedBy.includes(_id)) && 
              <>
                <div className="read_bt">
                  <Link onClick={onLikeClick}>Like</Link>
                </div>
              </>}
              {likes.likedBy.includes(_id) && 
              <>
                  <div className="read_bt">
                    <Link onClick={onDislikeClick}>Dislike</Link>
                  </div>
              </>}
            {song._ownerId===_id &&
            <>
              <div className="read_bt">
                <Link to={`/edit/${id}`}>Edit</Link>
              </div>
              <div className="read_bt">
                <Link onClick={onDeleteClick}>Delete</Link>
              </div>
            </>
            }    
            </div>
            <div className="col-md-6">
              <div>
                <img src={`${song.imageUrl}`} className="image_1" />
              </div>
            </div>
          </div>
        </div>
      </div>);
}