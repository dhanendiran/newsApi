import React, {  useContext, useState } from 'react'
import Content from './content'

function Navbar({setCategory,handlechange,handleClick}) {
 
    
    return (
       
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          
  <div class="container-fluid">
    <a class="navbar-brand text-primary" href="/">News<span className='text-danger'>24/7</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" onClick={()=>{setCategory("entertainment")}}>Entertainment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Technology" onClick={()=>{setCategory("technology")}}>Technology</a>
        </li>
        
         <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=>{setCategory("business")}}>Business</a>
        </li>
       <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=>{setCategory("health")}}>Health</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=>{setCategory("science")}}>Science</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=>{setCategory("sports")}}>Sports</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" onChange={handlechange}  type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success"onClick={handleClick} type="submit" >Search</button>
      </form>
    </div>
  </div>

</nav>
    )
}


export default Navbar
