import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import styled from "styled-components";

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
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password });
    };
  
    return (

        <div 
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url("https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
                backgroundSize: "cover",
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                



            }}>
            <input style={{ padding: 10, marginBottom: 20 }} type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
            <input style={{ padding: 10, marginBottom: 20 }} type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleClick} style={{ padding: 10, width: 100,backgroundColor:"black",color:"white" }}> Login </button>
            {/* <Button onClick={handleClick} style={{padding:10, width:100,}}> Login</Button> */}
        </div>
    );
};
export default Login