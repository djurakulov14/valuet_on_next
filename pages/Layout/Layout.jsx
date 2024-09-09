import React from 'react'
import Aside from '../Components/Aside'
import Header from '../Components/Header'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {
          children
        }
        <Aside/>
    </div>
  )
}

export default Layout