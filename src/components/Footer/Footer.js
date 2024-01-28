import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer className='footer'>
        &copy; ZivaStore{new Date().getFullYear()}
    </footer>
  )
}

export default Footer