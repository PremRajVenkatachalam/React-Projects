import React, { useContext, useState } from 'react';
import { DataContext } from './Data';
import Todo from './Todo';
import './Login.css';

const Login = () => {
    const { usernames, passwords } = useContext(DataContext);

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [success, setSuccess] = useState(false);
    const [passuccess, setPasSuccess] = useState(false);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handlePassChange(e) {
        setPass(e.target.value);
    }

    function handleLogin() {
        const checkExists = usernames.some(user => user.toLowerCase() === name.toLowerCase());
        setSuccess(checkExists);
    }

    function handlePassLogin() {
        const checkPassExists = passwords.some(userpass => userpass === pass);
        setPasSuccess(checkPassExists);
    }

    function handleLoginClick() {
        handleLogin();
        handlePassLogin();
    }

    return (
        <div>
            {!success && !passuccess && (
                <>
                <div className='input'>
                    <input placeholder='UserName' value={name} onChange={handleNameChange} />
                    <input placeholder='Password' value={pass} onChange={handlePassChange} />
                    <button onClick={handleLoginClick}>Login</button>
                    </div>
                </>
            )}
            {success && passuccess && <Todo />}
        </div>
    );
};

export default Login;