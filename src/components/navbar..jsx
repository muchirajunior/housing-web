import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth-context';
import { auth } from '../firebase-config';

export default function Navbar() {

  const currentUser=useAuth()
  console.log(auth.currentUser);

  const logOut= async () =>{
    await auth.signOut();
  }


  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">CRIB FINDER</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">Add Crib</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success btn-sm mr-2" type="submit">Search</button>
        
      </form>
      {
        auth.currentUser !==null ? <>
        <Link className='btn btn-light text-dark' to="/"  >user</Link>
         <button className='btn btn-outline-success' onClick={logOut} >Log Out</button>
        </>:<> <Link className="btn btn-primary btn-sm m-2" to="/signup">Log In</Link>
             <Link className="btn btn-success btn-sm m-2" to="/signup">Create new Account</Link>
        </>
       
        
      }
      
    </div>
  </div>
</nav>
  )
}
