import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import EditForm from "./EditForm";

export default function Edit(){
    const {id} = useParams();
    const baseUrl = 'http://localhost:3030/jsonstore/songs/'; 

    const [song, setSong] = useState();
    useEffect(()=>{
        fetch(baseUrl+id)
        .then(res=>res.json())
        .then(data=>{setSong(data)});
   }, [])

return(
    <>
        <Header />
        <EditForm {...song}/>
    </>
);

}