
import { useState } from 'react';
import './Rinfo';
//to store data in redux tool kit
import { useDispatch } from 'react-redux';
import {add} from './store/Cartslice';

function Rinfo({ id, imgdata, rating, rname, price, address, somedata }) {
    //redux 
    const newproduct={
        id,
        rname,
        imgdata,
        price
    }
    const dispatch =useDispatch();
    const handleAdd=(newproduct)=>{
        dispatch(add(newproduct));
        console.log(newproduct);
    }
    //redux

    return (

        <>
            <div class="product-container">
                <img src={imgdata} alt="error"></img>
                <div class="rating">{rating} ⭐</div>
                <div class="info">
                    <h4>{rname}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>Price: {price}</p>
                    <p>Address: {address}</p>

                    <hr></hr>
                    <div style={{ display: 'flex' }}>
                        <p>{somedata}</p>
                        <button class="cartbtn" onClick={()=>handleAdd(newproduct)}>Add to cart</button>
                    </div>
                </div>
            </div>

            <br></br>
        </>
    )
}
export default Rinfo;