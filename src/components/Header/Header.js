import React from 'react'
import './Header.css'
import logo from './../../images/logo.png'

function Header() {
  return (
    <div className='header'>
        <nav className='navbar'>
            <img src={logo} alt='#' className='logo'/>
            <div className='sign-in-button'>
                <button className='btn btn-rounded'>Sign In</button>
            </div>
        </nav>

        <div className='content'>
            <div className='header-info'>
                <h1>Unlimited movies , TV shows and more.</h1>
                <p>Watch anywhere . Cancel anytime.</p>
                <br />
                <p id='p1'>Ready to watch? Enter your email to create or restart your membership.</p>
                <form>
                    <input type={"email"} className="email" placeholder='Email Address' />
                    <input type={"submit"} value={"Get Started >"} className="submit-button btn btn-rounded"/>
                </form>
            </div>

        </div>
       
    </div>
  )
}

export default Header