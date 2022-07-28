import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const {user ,loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">MeBooking</span>
        </Link>
        {user ? <div className="navItems">
            <span>{user.username}</span>
            <button className="navButton" onClick={e=>{
              dispatch({
                type:"LOGOUT" 
              })
              navigate("/login");
            }}>Logout</button>
          </div> : (
          <div className="navItems">
            <button className="navButton" onClick={e=>{navigate("/register")}}>Register</button>
            <button className="navButton" onClick={e=>{navigate("/login")}}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;