import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove_products, addqnt_products, subqnt_products } from "./Redux/Action";




const Cart = () => {

    const [price, setPrice] = useState(0);

    const data = useSelector((state) => state.ProductCart.Cart)
    const dispatch = useDispatch();

    const rem = (items) => {
        dispatch(remove_products(items))
    }

    const addqnt = (id) => {
        dispatch(addqnt_products(id))
        // console.log(id)
    }

    const subqnt = (id) => {
        dispatch(subqnt_products(id))
    }

    const total = () => {
        let price = 0;
        data.map((items) => {
            price = price + items.price * items.qnt
        })
        setPrice(price);

    }
    useEffect(() => {
        total();
    }, [total])



    return (
        <>
            <h5 className="text-center">Items in your Cart  {data.length}</h5>

            <hr />
            {data.length ?
                <div className="  text-center">
                    <br />
                    <p className="text total"> <strong style={{ color: 'black' }}>₹</strong> Total : {price}
                        <br /> <br />
                        <NavLink to="/checkout" className="checkout_btn text-center" >CheckOut</NavLink>
                    </p >

                </div> : <h4 className="text-center  cart-empty"> Your Cart is Empty</h4>}
            <br />
            {
                data.map((items) => {
                    return (
                        <>

                            <div className="card ml-2" style={{ width: "14rem" }} key={items.key} >

                                <img src={items.img} className="card-img-top" alt="img" />
                                <div className="card-body">
                                    <p className="card-title text-center">{items.title}</p>
                                    <p className="card-text text-center"> <strong>₹</strong>{items.price}</p>
                                    <NavLink to="#" onClick={() => rem(items.id)} className="cart_btn text-center" >Remove</NavLink>


                                    <div className="d-flex justify-content-around">
                                        <NavLink to="#" onClick={() => subqnt(items.id)} className="cart_btn_sub text-center  mt-3" style={{ fontSize: 20 }} >-</NavLink>


                                        <span className="mt-4 " >{items.qnt}</span>

                                        <NavLink to="#" onClick={() => addqnt(items.id)} className="cart_btn-add text-center mt-3" style={{ fontSize: 20 }} >+</NavLink>
                                    </div>
                                </div>

                            </div>


                        </>)
                })



            }



        </>
    )
}

export default Cart;