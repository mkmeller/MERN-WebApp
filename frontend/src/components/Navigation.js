import React from 'react';
import { Link } from 'react-router-dom';
import { RiBasketballLine } from "react-icons/ri";
import { IoMdHome, IoIosContact } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { MdArticle } from "react-icons/md";


function Navigation() {
  return (
    <nav>
        <Link to="/"><IoMdHome/> Home</Link>
        <Link to="/Topics"><MdArticle/> Topics</Link>
        <Link to="/Collection"><RiBasketballLine /> Fantasy</Link>
        <Link to="/Gallery"><GrGallery/> Gallery</Link>
        {/* <Link to="/Contact"><IoIosContact/> Contact</Link> */}
        <Link to="/Order"><FaShoppingCart/> Order</Link>
    </nav>
  );
}

export default Navigation;
