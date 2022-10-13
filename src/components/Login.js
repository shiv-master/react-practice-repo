import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Auth from "./context/Auth";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const defaultUser = {
        name: "shivam",
        password: "Shivam@12345",
    };
    const [error, setError] = useState("");
    const { setIsAuth, setUser } = useContext(Auth)
    const navigate = useNavigate()

    const userNameHandler = (e) => {
        setUserName(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };
    const submitClicked = () => {
        // empty fields on submit
        setUserName("");
        setPassword("");
        if (userName === defaultUser.name && password === defaultUser.password) {
            // success
            setIsAuth(true)
            setUser(userName)
            localStorage.setItem("userName", userName)
            navigate('/home', 'replace')
        } else {
            // error
            setError("Either userName or password is incorrect. Please try again.");
        }
    };
    const tryAgainClicked = () => {
        setError("");
    };

    return (
        <>
            {!error ? (
                <>
                    <div>
                        <label htmlFor="userName">UserName</label>
                        <input
                            type="text"
                            id="userName"
                            value={userName}
                            onChange={userNameHandler}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={passwordHandler}
                        ></input>
                    </div>
                    <button className="btn-space" onClick={submitClicked} disabled={!userName || !password}>Submit</button>
                </>
            ) : (
                <>
                    {error}
                    <br />
                    <button onClick={tryAgainClicked}>Try Again</button>
                </>
            )}
        </>
    );
};

export default Login;
