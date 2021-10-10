import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from 'react-router-dom';
import {useStateValue} from '../StateProvider';
import {auth} from '../firebase';
// import {signOut } from "firebase/auth";
const Header = () => {

    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user){
            auth.signOut().then(() => {
                // Sign-out successful.
                alert('Sign-out successful');
              }).catch((error) => {
                  alert('Error sign out ' + error.message);
                // An error happened.
              });
        }
    }
    return ( 
        <>
        <div className = "header">
            <Link to="/" >
                <img alt = "amazon logo"className = "header_logo" src = "https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            
            <div className = "header_search">
                <input className="header_searchInput" type = "text"/>
                <SearchIcon fontSize="large" className="header_searchIcon"/>
            </div>

            <div className = "header_nav">
                <Link to={!user && "/login"} className = "header_option">                   
                    {/* <span className = "header__optionLineOne">Hello Guest</span> */}
                    <div onClick={handleAuthentication}>
                        <p className = "header__optionLineOne">Hello { user != null ? user.email : "Guest" }</p>
                        <p className = "header__optionLineTwo">{ user != null ? "Log Out" : "Sign In" }</p>
                    </div>
                </Link>
                <Link to="/orders" className = "header_option">
                    {/* <div className = "header_option"> */}
                        <p className = "header__optionLineOne">Returns</p>
                        <p className = "header__optionLineTwo"> & Orders</p>
                    {/* </div> */}
                </Link>
                <div className = "header_option">
                    <span className = "header__optionLineOne">Your</span>
                     <span className = "header__optionLineTwo">Prime</span>
                </div>
                <div className = "header_option">
                    <Link to="/checkout">
                        <AddShoppingCartIcon fontSize="large" className="header__optionLineTwo"/>
                    </Link>
                    <span className="header__optionLineOne header__basketcount">{basket?.length}</span>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Header