import React from 'react'

function navbar() {
  return (
    <div>
        <nav>
            <div className="logo" >react nav</div>
            <ul className="nav-links"> </ul>
            <li> <a> Live</a></li>
            <li> <a> Draft</a></li>
            <li> <a> Archeived</a></li>
            <li> <a> Premium</a></li>

        </nav>
    </div>
  )
}

export default navbar