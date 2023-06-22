import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {remove} from './store/Cartslice';

function Products() {
    //to remove cart item from store
    const dispatch=useDispatch();
    function removeFromCart(itemid){
        dispatch(remove(itemid));
    }
   //to get data from store to cart through redux 
    const items = useSelector(state => state.cart);
    console.log(items);
    return (
        <>
            <div>
                <h1 style={{color:'red',marginLeft:'0cm'}}>Cart 🛒</h1>

                {items.map(it => (
                    <div class="cart-items" >
                        <img src={it.imgdata} style={{width:150,height:100,borderRadius:'4px'}}alt="error"></img>
                        <div style={{margin:40,marginLeft:'4cm'}}>{it.rname}</div>
                        <div style={{margin:40,marginLeft:'4cm'}}>{it.price}</div>
                        <div><button on onClick={()=>removeFromCart(it.id)} style={{backgroundColor:"lightblue",color:"white",border:"none",cursor:"pointer"}}>Remove</button></div>
                    </div>
                   
                ))
                }
            </div>

        </>
    )
}
export default Products;