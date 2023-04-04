import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Logout(){

    const navigate = useNavigate();
    const {onLogOut} = useContext(AuthContext);

    onLogOut();

    navigate('/');
}