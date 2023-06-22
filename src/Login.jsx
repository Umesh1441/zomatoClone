import { NavLink } from 'react-router-dom';
import './LoginC.css';


function Login() {
   
    

    return (
        <>
        <h1 class="animated-heading">Welcome to Zomato</h1>
        <div class="front_main">
            <div class="login-container">
                <h1 style={{marginRight:'2cm'}}>Login</h1>
                <form>
                    <div class="form-group"style={{marginTop:"1cm"}}>
                        <label for="username" >Username</label><br></br>
                        <input type="text" id="username" name="username" placeholder="Enter your username" required />
                    </div>
                    <div class="form-group"style={{marginTop:"1cm"}}>
                        <label for="password">Password</label><br></br>
                        <input type="password"  id="password" name="password" placeholder="Enter your password" required />
                    </div>
                    <NavLink to='/' style={{textDecoration:"none"}}><button type="submit" style={{marginTop:"3cm"}}>Login</button></NavLink>
                    
                </form>
            </div>
            <div class="frontpage">
                <img src='./image/4.jpg' style={{width:"69%",height:"17cm",marginLeft:"6cm",backdropFilter:"none"}}>
                </img>
            </div>
            
            </div>

        </>
    )
}
export default Login;