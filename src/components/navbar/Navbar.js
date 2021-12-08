import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import Auth from '../../Auth';

const Navbar = () => {

  const navigate = useNavigate()

  const logout = () =>{
    Auth.signout()
   navigate('/')
  }
    return (
        <div classNameName="navbar-section">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/dashboard">My Shop</Link>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    
    
      <li className="nav-item">
        <button 
        onClick={logout}
        className="">Logout</button>
      </li>
    
    </ul>
  </div>
</nav>
 <div classNameName="sidebar">
 <ul className="list-group">
  <li className="list-group-item">
    <Link className="navLink" to="/dashboard">
       Dashbaord
    </Link>
   </li>
  <li className="list-group-item">
    <Link className="navLink" to="/home">
       Add Customer
    </Link>
   </li>
  <li className="list-group-item">
    <Link className="navLink" to="/allrecords">
    Total Customers
    </Link>
  </li>
  <li className="list-group-item">
    <Link className="navLink" to="/about"> About</Link>
   </li>
  <li className="list-group-item">
  <Link className="navLink" to="/about">
  Calender
  </Link>
   </li>
  <li className="list-group-item">
  <Link className="navLink" to="/about">
    Contact Us
  </Link>
    </li>
</ul>

 </div>
        </div>
    )
}

export default Navbar
