import React from 'react'
import Product from '../Productsapi';
import { NavLink } from "react-router-dom";

const Shop = () => {

  
    return (
        <>
            <h5 className='text-center'>Shop</h5>
            <hr />

            {
                Product.map((items) => {
                    return (
                        <>
                            <div className="card ml-2" style={{ width: "14rem" }}>
                                <img src={items.img} className="card-img-top" alt="IMg" />
                                <div className="card-body">
                                    <p className="card-title text-center">{items.title}</p>
                                    <p className="card-text text-center"> <strong>₹</strong>{items.price}</p>
                                    <NavLink to={`/productdetail/${items.id}`}  className="see_btn text-center" >See </NavLink>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}
export default Shop;