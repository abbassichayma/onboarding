import Link from 'next/link'
import React from 'react'

import RegisterStyle from '../styles/register.module.css'


function Registre() {
 
  return (
    <div className={RegisterStyle.register}>
        <span className={RegisterStyle.registerTitle}>S'inscrire</span>
        <form className={RegisterStyle.registerForm}>

        <label>Non et Prénom</label>
            <input  type="text"  
            className={RegisterStyle.registerInput} 
            placeholder='nom et prénom'
            />
            
            <label>Email</label>
            <input  type="text" 
            className={RegisterStyle.registerInput} 
            placeholder='email'
            
            />
           
            <label>mot de passe</label>
            <input  type="password"  
            className={RegisterStyle.registerInput} 
            placeholder='mot de passe'
    
            />
            
            <button className={RegisterStyle.registerButton} type="submit" >S'inscrire</button>
        </form>
        <button className={RegisterStyle.registerLoginButton}>
        <Link style={{color:"white"}} href="/login" >connexion</Link>
        </button>
        
    </div>
  )
}

export default Registre