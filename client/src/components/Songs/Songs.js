import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function Songs(){

    const [songs, setSongs] = useState([])
  
    const baseUrl = 'http://localhost:3030/jsonstore/songs';
    
    useEffect(()=>{
       fetch(baseUrl)
      .then(res=>res.json())
      .then(data=>{setSongs(Object.values(data))});
    },[])

    return(
    <>
        <Header />
        <Body songs = {songs}/>
        <Footer />
    </>
);
}