import Song from "./Song";

export default function Body({songs}){

  return (
    <div className="game_section layout_padding">
    <div className="container">
      <h1 className="game_taital">
        <img src="images/icon-1.png" /> <span>All songs</span>
      </h1>
      <p className="game_text">
        established fact that a reader will be distracted by the readable
        content of a page when looking at its layout
      </p>
      <div className="game_section_2 layout_padding">
        <div className="row">
          {console.log(songs)}
        </div>
      </div>
    </div>
  </div>
    );
}