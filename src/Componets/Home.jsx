import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <>
            <h5 className='text-center'>Shoping Website</h5>
            <hr/>
            <div className='text-center mt-5'>
                <NavLink  className="home_btn" to="/shop">
                    <Button variant="contained" color="success">
                        Shop NOOW
                    </Button>


                </NavLink>
            </div>


        </>
    )
}
export default Home;