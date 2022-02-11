import {useState}  from "react";
import { useDispatch } from "react-redux";
import {login} from "../../redux/apiCalls";
//import styled from "styled-components";

// const Button = styled.button`
//     width: 40%;
//     border: none;
//     padding: 15px 20px;
//     background-color: teal;
//     color: white;
//     cursor: pointer;
//     margin-bottom: 10px;
//     &:disabled{
//         color:black;
//         cursor:not-allowed;
//     }
// `;
const Login =()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e)=>{
        e.preventDefault()
        login(dispatch,{username,password});
    };
    return(
        <div 
        style={{
            height: "100vh",
            display:"flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",

            
        
        }}>
            <input  style={{padding:10, marginBottom:20 }} type="text" placeholder="username" onChange={e=>setUsername(e.target.value)}/>
            <input style={{ padding:10, marginBottom:20}} type="password" placeholder="password"  onChange={e=>setPassword(e.target.value)}/>
            <button onClick={handleClick} style={{padding:10, width:100,}}> Login </button>
            {/* <Button onClick={handleClick} style={{padding:10, width:100,}}> Login</Button> */}
        </div>
    );
};
export default Login