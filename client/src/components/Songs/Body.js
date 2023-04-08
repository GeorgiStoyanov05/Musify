import Song from "./Song";

export default function Body({songs}){

  return (
    <div className="game_section layout_padding">
    <div className="container">
      <h1 className="game_taital">
        <img src="images/icon-1.png" /> <span>All songs</span>
      </h1>
      {songs.length!=0 
      ?<> 
      <p className="game_text">
      Our users' choices of songs:
      </p>
      <div className="game_section_2 layout_padding">
      <div className="row">
        {songs.map((song, i)=>(<Song key = {song._id} {...song} index = {i+1}/>))}
      </div>
      </div>
      </>
      :<p> 
        <h1 className="game_taital">No songs available right now!</h1>
      </p>
      }
      
    </div>
  </div>
    );
}