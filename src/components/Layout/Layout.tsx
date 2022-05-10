import React, { Children } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

interface Props{
    children : JSX.Element
  }

function Layout({children}: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout