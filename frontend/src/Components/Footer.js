import React from 'react'
import './index.css'

function Footer() {
  return (
    <div>
      <footer id='sm-footer'>
        <a className='socials' href='https://www.facebook.com'>
          <i className='fab fa-facebook' />
        </a>
        <a className='socials' href='https://www.instagram.com'>
          <i className='fab fa-instagram' />
        </a>
        <a className='socials' href='https://www.twitter.com'>
          <i className='fab fa-twitter' />
        </a>
        <a className='socials' href='https://youtube.com'>
          <i className='fab fa-youtube' />
        </a>

        <a className='socials' href='https://github.com'>
          <i className='fab fa-github' />
        </a>

        <a className='socials' href='https://medium.com'>
          <i className='fab fa-medium' />
        </a>

        <a className='socials' href='https://linkedin.com'>
          <i className='fab fa-linkedin' />
        </a>
      </footer>
      <div className='foot'>
        <p className='copyright'>All right reserved © 2021</p>
      </div>
    </div>
  )
}
export default Footer
