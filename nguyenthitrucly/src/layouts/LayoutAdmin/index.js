import { Outlet } from "react-router-dom";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import Signin from "./Signin";
function LayoutAdmin(){
    return (
        <>
        {/* <Signin/> */}
        <Header/>
           
    </>
    )
}
export default LayoutAdmin;