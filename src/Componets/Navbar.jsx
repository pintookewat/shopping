import React from "react";
import { NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";



const Navbar = () => {
    const data = useSelector((state) => state.ProductCart.Cart)

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <div className="cartsnav">

                                    <NavLink className="nav-link active" aria-current="page" to="/cart">
                                        <Badge badgeContent={data.length} color="primary">
                                            <p style={{ color: "black" }} >Cart</p> <ShoppingCartIcon style={{ color: "black" }} />
                                        </Badge>
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>
        </>
    )
}

export default Navbar;