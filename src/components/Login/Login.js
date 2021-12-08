import React , {useState} from 'react';
import { useNavigate , Link } from 'react-router-dom';
import Auth from '../../Auth';

const Login = () => {

    const obj = {
        email: '',
        password: ''
    }

    const [state, setState] = useState(obj)
    const navigate = useNavigate()

    const signin = () =>{
        const logAuth =  JSON.parse(localStorage.getItem('signup')) || []
        const index =  logAuth.findIndex((data)=>data.email === state.email && data.password === state.password)
        console.log("index" , index )
        if(index>=0){
            Auth.authenticate()
            navigate('/home')
        }

    }

    const onChangeEmail = (e) =>{
        const copy = {...state}
        copy.email = e.target.value;
        setState(copy)
    }
    const onChangePassword = (e) =>{
        const copy = {...state}
        copy.password = e.target.value;
        setState(copy)
    }

    return (
        <div>
        <div className="auths">
        <div className="auth">
        <h2>Login</h2>

        <div className="form-group mb-3">
            <input type="text" 
            placeholder="Email"
            className="form-control"
            value={state.email}
            onChange={onChangeEmail}
            />
        </div>
        <div className="form-group mb-3">
            <input type="password" 
            placeholder="password"
            className="form-control"
            value={state.password}
            onChange={onChangePassword}
            />
        </div>
        <button className="authButton"
        onClick={signin}
        >Login</button>
        <p>
            If don't has account?
            <Link to="/register">Register</Link>
        </p>

        </div>

    </div>
        </div>
    )
}

export default Login
