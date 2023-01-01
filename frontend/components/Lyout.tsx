import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Lyout(props:any) {
  return (
    <>
    <Navbar/>
    {props.children}
    <Footer/>
    </>
  )
}

export default Lyout