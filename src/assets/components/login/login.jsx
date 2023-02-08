import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'

const Login = () => {

    return (
        <>
            <div className="container">
                <div className="container-home">
                    <h1>Admin Panel</h1>
                    <div className="login-container">
                        <label className='block'> Login
                            <input className='block' type="text" />
                        </label>
                        <label className='block'>Password
                            <input className='block' type="password" />
                        </label>
                        <div className='btn-1'>
                            <Link to='/mainsection'>Sign in</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login