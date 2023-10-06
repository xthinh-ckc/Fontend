import { NavLink } from "react-router-dom";
export default function Buy(){
    return(
    <>
     <div className="d-flex justify-content-between functionbutton">
            <NavLink to="/" className="nav-link  text-secondary csw-btn-button btncontinue" >Continue shopping</NavLink>
            <NavLink to="/Pay" className="nav-link  text-secondary csw-btn-button btnbuy" >Buy</NavLink>     
    </div>
    </>
    );
}