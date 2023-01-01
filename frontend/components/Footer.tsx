import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="text-center text-white" style={{background: "#caced1"}}>
  <div className="container p-6">
    <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
      <div className="lg:mb-0 mb-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
          className="w-full rounded-md shadow-lg"
        />
      </div>
      <div className="lg:mb-0 mb-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
          className="w-full rounded-md shadow-lg"
        />
      </div>
      <div className="lg:mb-0 mb-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
          className="w-full rounded-md shadow-lg"
        />
      </div>
      <div className="lg:mb-0 mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Land_Rover_logo_2.jpg"
          className="w-full rounded-md shadow-lg"
        />
      </div>
      <div className="lg:mb-0 mb-6">
        <img
          src="https://sf2.autoplus.fr/wp-content/uploads/autoplus/2020/03/voici-nouveau-logo-bmw.jpg"
          className="w-full rounded-md shadow-lg"
        />
      </div>
      <div className="lg:mb-0 mb-6">
        <img
          src="https://www.1min30.com/wp-content/uploads/2019/10/Mercedes.jpg"
          className="w-full rounded-md shadow-lg"
        />
      </div>
    </div>
  </div>

  <div className="text-center p-4" style={{background:" rgba(0, 0, 0, 0.2)"}}>
    © 2021 Copyright:
    <a className="text-white" href="https://tailwind-elements.com/">Tailwind Elements</a>
  </div>
</footer>
    </div>
  )
}

export default Footer