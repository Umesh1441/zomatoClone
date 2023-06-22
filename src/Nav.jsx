import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <>
        <div class='nav' style={{backgroundColor:"whitesmoke"}}>
        <NavLink to='/' style={{textDecoration:'none',fontWeight:'bolder',color:'red,',marginTop:0,fontSize:20 }}><h1> 🤌🏼  zomato</h1></NavLink>
        <NavLink to='/'style={{textDecoration:'none',marginTop:52,marginLeft:20,fontSize:24,color:"black"}}>Home</NavLink>
        <div style={{marginLeft:"17cm"}}></div>
        <NavLink to='/products'style={{textDecoration:'none',marginTop:40,marginLeft:20,fontSize:25,color:"black"}}><i class='cart'>🛒</i></NavLink>
        <NavLink to='/login'style={{textDecoration:'none',marginTop:45,marginLeft:18,fontSize:25,color:"black"}}><i class='login'>🔓Login</i></NavLink>
        <NavLink to='/login'style={{textDecoration:'none',marginTop:45,marginLeft:6,fontSize:25,color:"black"}}><i class='logout'>🔒Logout</i></NavLink>
      </div>
        </>
    )
}
export default Nav;