import React from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
const logo = 'https://pngimg.com/uploads/amazon/amazon_PNG11.png';

function Header() {
    return(
        <div className="header">
            <Link to="/" >
            <img src={logo} className="header__logo"></img>
            </Link>
            
        
            <div className="header__search">
                <input 
                className="header__searchInput" 
                type="text"
                placeholder="Search Amazon"  />
                {/* Icon */}
                <SearchIcon className="header__searchicon" />

            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="line1">Hello Guest</span>               
                    <span className="line2">Sign In</span>               
                </div>
                <div className="header__option">
                    <span className="line1">Returns</span>               
                    <span className="line2">& Orders</span> 
                </div>
                <div className="header__option">
                    <span className="line1">Your</span>               
                    <span className="line2">Prime</span> 
                </div>

                <Link to="/checkout" >
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="line2 BasketCount">0</span>
                    </div>
                </Link>

                
            </div>               
        </div>   
    )
}

export default Header;