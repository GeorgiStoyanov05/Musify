import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function Songs(){

    const [songs, setSongs] = useState([])
  
    const baseUrl = 'http://localhost:3030/data/songs';
    
    useEffect(()=>{
        try{
            fetch(baseUrl)
            .then(res=>res.json())
            .then(data=>{
                if (data.code===404){
                    throw new Error(data.message);
                }
                else{
                    setSongs(Object.values(data));
                }
            })
        } catch(err){
        }
    },[])

    return(
    <>
        <Header />
        <Body songs = {songs}/>
        <Footer />
    </>
);
}