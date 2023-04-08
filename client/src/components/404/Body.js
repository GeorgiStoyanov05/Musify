import { Link } from "react-router-dom";

export default function Body(){
    return (
        <>
            <h1 className="about_taital">Error 404: Invalid path</h1>
                <div className="read_bt">
                <Link to={"/"}>To the main page!</Link>
            </div>
        </>
    );
}