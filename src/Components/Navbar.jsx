import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">Book-Rental</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar navbar-expand-lg" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Finance">Finance</Link></li>
            <li><Link className="dropdown-item" to="/SkillBased">Skill-Based</Link></li>
            <li><Link className="dropdown-item" to="/Biography">Biography</Link></li>
            <li><Link className="dropdown-item" to="/SelfHelp">Self-Help</Link></li>
            <li><Link className="dropdown-item" to="/Fictional">Fictional</Link></li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ways to Contact
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Login">Login</Link></li>
            <li><Link className="dropdown-item" to="/Signup">Signup</Link></li>
            <li><Link className="dropdown-item" to="/feedback">Feedback</Link></li>
            <li><Link className="dropdown-item" to="/suggestion">Suggestion</Link></li>
            <li><Link className="dropdown-item" to="/Contact">Contact</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Enter the book name" aria-label="Enter the book name you want to search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className='d-flex mb-2'>
        <li className="nav-item list-unstyled mx-2">
          <Link className="nav-link"  to="/Cart">Cart</Link>
        </li>
        <li className="nav-item list-unstyled mx-2">
          <Link className="nav-link"  to="/Account">Account</Link>
        </li>
      </ul>
    </div>
  </div>
    </nav>
    </>
  )
}

export default Navbar
