import React from 'react'
import Navbar from './Navbar'

const layout = ({children}) => {
  return (
    <div className="layout">
<Navbar/>
{children}


    </div>
  )
}

export default layout