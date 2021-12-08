import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const obj ={
        name: '',
        email: '',
        password: ''
    }

    const [state,setState] = useState(obj)
    const navigate = useNavigate()

    const signUp = () =>{
        const authData =JSON.parse(localStorage.getItem('signup')) || []
        authData.push({
            name: state.name,
            email: state.email,
            password: state.password
        })
        localStorage.setItem('signup' , JSON.stringify(authData))
        localStorage.setItem('token',state.name)
        navigate('/home')
    }

    const handleChangeName = (e) =>{
        const copy = {...state}
        copy.name = e.target.value;
        setState(copy)
    }
    const handleChangeEmail = (e) =>{
        const copy = {...state}
        copy.email = e.target.value;
        setState(copy)
    }
    const handleChangePassword = (e) =>{
        const copy = {...state}
        copy.password = e.target.value;
        setState(copy)
    }


    return (
        <div className="auths">
        <div className="auth">
        <h1>Register</h1>

        <div className="form-group mb-3">
            <input type="text" 
            placeholder="Username"
            className="form-control"
            value= {state.name}
            onChange={handleChangeName}
            />
        </div>
        <div className="form-group mb-3">
            <input type="text" 
            placeholder="Email"
            className="form-control"
            value={state.email}
            onChange={handleChangeEmail}
            />
        </div>
        <div className="form-group mb-3">
            <input type="password" 
            placeholder="password"
            className="form-control"
            value={state.password}
            onChange={handleChangePassword}
            />
        </div>
        <button className="authButton"
        onClick={
            signUp
            }
        >Register</button>
        {/* <p>If already has account?
        <Link to="/login">Login</Link>
        </p> */}

        </div>

    </div>
    )
}

export default Register
