import { Link } from "react-router-dom";
import useIcon from "../assets/user.png"


const Navbar = () => {
  return (
    <div className="flex justify-between p-5 mx-20">

      <div className=""></div>
      <div className="nav space-x-5 py-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login flex gap-3 items-center">
        <div className="">
          <img src={useIcon} alt="" />
          
        </div>
        <Link to="/auth/login" className="btn btn-neutral bg-black rounded-none">Login</Link>
        
      </div>
    </div>
  );
};

export default Navbar;