import React from 'react'
import "./Nav.css"
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'

const Nav = ({ handleInputChange, query }) => {
  console.log(query)
 
  return (
    
   <nav>
      <div className="nav-container">
        <input 
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search for a shoe name."
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart  className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className='nav-icons'/>
        </a>
      </div>
    </nav>
  );
};

export default Nav;