import React, { useState } from 'react'
import './LoginSignup.css'

import user from '../Assets/user.png'
import email from '../Assets/email.png'
import lock from '../Assets/lock.png'

const LoginSignup = () => {

    const [action,setAction] = useState("Registrar")
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
            {action==="Entrar"?<div></div>:<div className="input">
                    <img src={user} alt="" />
                    <input type="text" placeholder='Nome de usuário' />
                </div>}
                
            </div>

            <div className="inputs">
                <div className="input">
                    <img className='email' src={email} />
                    <input type="email" placeholder='E-mail' />
                </div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={lock} alt="" />
                    <input type="password" placeholder='Senha' />
                </div>
            </div>

            {action==="Registrar"?<div></div>:<div className="forgot-password">Esqueceu sua senha? <span>Clique aqui</span></div>}
            

            <div className="submit-container">
                <div className={action==="Entrar"?"submit gray":"submit"} onClick={()=>{setAction("Registrar")}}>Registrar</div>
                <div className={action==="Registrar"?"submit gray":"submit"} onClick={()=>{setAction("Entrar")}}>Entrar</div>
            </div>
        </div>
    )
}

export default LoginSignup
