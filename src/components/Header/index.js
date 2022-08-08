import React from 'react'
import './index.css'

export default function Header() {
  return (
    <div className='header-content'>
        <div className='header-content-left'>
            logo
        </div>
        <div className='header-content-center'></div>
        <div className='header-content-right'>
            <div className='user-name'>
              <img src="/4.jpg" alt="" />
              <span>桃之助</span> 
            </div>
            <button className='logout'>退出登录</button>
        </div>
    </div>
  )
}
