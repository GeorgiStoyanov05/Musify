import Header from "./Header";
import SongDetails from "./SongDetails";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

export default function Details(){

    const {id} = useParams();

    return(
        <>
            <Header />
            <SongDetails />
            <Footer />
        </>
    );
}

