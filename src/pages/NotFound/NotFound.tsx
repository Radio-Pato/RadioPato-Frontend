import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

function NotFound() {
  return (
    <Layout>
      <>
        <h1>Error 404</h1>
        <Link to ="/Home">Go Home</Link>
      </>
        
    </Layout>
  )
}

export default NotFound