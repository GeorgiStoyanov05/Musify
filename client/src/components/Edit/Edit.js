import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import EditForm from "./EditForm";

export default function Edit(){

    const {id} = useParams();
    const baseUrl = 'http://localhost:3030/jsonstore/songs/'; 

    const [song, setSong] = useState({});
    useEffect(async ()=>{
        const res = await fetch(baseUrl+id);
        const data = await res.json();
        setSong(data);
   }, [])

return(
    <>
        <Header />
        <EditForm id = {id} song = {song}/>
    </>
);

}