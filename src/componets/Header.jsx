// forma rapida rafce usar ese comando 
import React from 'react'

const Header = ({titulo,fecha}) => {
  return (
    <header>
        <h1>{titulo} Fecha{fecha}</h1>
    </header>
  )
}

export default Header