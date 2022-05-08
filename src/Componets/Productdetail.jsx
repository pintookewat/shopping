import React from 'react';
import product from "../Productsapi";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { add_products } from "./Redux/Action";
import { NavLink } from "react-router-dom";

const Productdetail = () => {
    const prodid = useParams();
    const productdetail = product.filter((products) => products.id == prodid.id)
    const pro = productdetail[0];

    const dispatch = useDispatch();

    const buy = (items) => {
        dispatch(add_products(items))
    }

    return (
        <>
            <h5 className='text-center'>Product Detail</h5><br />
            <hr />
            <div className='container-fluid'>
                <div className='row prodetail'>
                    <div className='col-6 proimg' >
                        <img src={pro.img} alt="see" />
                    </div>
                    <div className='col-6 procol-6' >
                        <h1 className='text-center prodetailtitle'> Name : {pro.title}</h1>
                        <h1 className='text-center prodetailprice'> Price : <strong>₹</strong>{pro.price}</h1>
                        <div className='text-center'>
                         <NavLink to="#" onClick={() => buy(pro)} className="shop_btn text-center" >Buy</NavLink></div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Productdetail;