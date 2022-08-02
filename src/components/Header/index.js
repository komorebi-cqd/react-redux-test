import React from 'react'
import './index.css'

export default function Header() {
  return (
    <div className='header-content'>
        <div className='header-content-left'>
            logo
        </div>
        <div className='header-content-right'>
            <span>用户名</span>
            <button>退出登录</button>
        </div>
    </div>
  )
}
