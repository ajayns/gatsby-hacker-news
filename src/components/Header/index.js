import React from 'react'
import Link from 'gatsby-link'

import github from "../../assets/github.png"

const Header = () => (
  <div
    style={{
      background: '#ff6600',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ 
        margin: 0,
        display: 'inline', 
        }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Hacker News
        </Link>
      </h1>
      <a
          href="http://github.com/ajayns/"
          style={{
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src={github} style={{ margin: 0, height: '28px' }}/>
      </a>      
    </div>
  </div>
)

export default Header
