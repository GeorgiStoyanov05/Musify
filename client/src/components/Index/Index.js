import Header from "./Header";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import About from "./About";
import ClientSection from "./ClientSection";
import { useEffect, useState } from "react";

export default function Index(){

    const baseUrl = 'http://localhost:3030/data/songs'
    const url = 'http://localhost:3030/jsonstore/feedback';

    const [songNames, setSongNames] = useState([]);
    const[messages, setMessages] = useState([]);

    useEffect(()=>{
        fetch(baseUrl)
        .then(res=>res.json())
        .then(data=>setSongNames(Object.values(data)));

        fetch(url)
      .then(res=>res.json())
      .then(data=>setMessages(Object.values(data)))
    }, [])




    return (
<>
    <Header />
    <About />
    <ClientSection messages = {messages}/>
    <ContactUs songNames = {songNames}/>
    <Footer />
</>
    );
}