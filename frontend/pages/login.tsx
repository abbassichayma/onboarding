import Link from 'next/link'
import React from 'react'
import loginStyle from '../styles/login.module.css'

function Login() {
  
  return (
    <div className={loginStyle.login}>
        <span className={loginStyle.loginTitle}>Connexion</span>
        <form className={loginStyle.loginForm}>
            <label>Nom et Prénom</label>

            <input  
            type="text" 
            className={loginStyle.loginInput} 
            placeholder='nom et prénom'
        
            />
           
            <label>mot de passe</label>
            
            <input  
            type="password"  
            className={loginStyle.loginInput} 
            placeholder='mot de passe'
            />
           
            <button className={loginStyle.loginButton} type='submit' >connexion</button>
          
        </form>
        
        <button className={loginStyle.loginRegistreButton}>
          <Link  style={{color:"white"}} href="/register" >S'inscrire</Link>
          </button>
        
    </div>
  )
}

export default Login