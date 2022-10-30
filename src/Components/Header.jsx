import React from 'react'
import './Header.css'

function Header() {
    return (
        <div >
            <navbar className="top-flex">
                <div className='left'><img alt='logo' src='https://news.ycombinator.com/y18.gif'></img>
                <p>Hacker News</p>
                <a href="#">new</a>|<a href="#">past</a>|<a href="#">zcomments</a>|<a href="#">ask</a>|<a href="#">jobs</a>|<a href="#">submit</a>
                </div>
                <div className='right'><a href="#">Login</a></div>
                
                </navbar>
        </div>
    )
}

export default Header