import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h1>Error 404</h1>
        <Link to ="/Home">Go Home</Link>
    </div>
  )
}

export default NotFound