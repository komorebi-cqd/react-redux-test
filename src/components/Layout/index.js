import React from 'react'
import './index.css'
import PropTypes from 'prop-types'

export default class Layout extends React.Component {
    static propTypes = {
        header: PropTypes.element,
        aside:PropTypes.element,
        children:PropTypes.element
    }
    render(){
        return (
            <div className='container'>
                <section className='layout-sider'>
                    {/* 左边占位 */}
                    <div className='sider-left-placeholder'></div>
                    {/* 左边菜单 */}
                    <aside className='sider-left-nav'>
                        <div className='sider-left-nav-childer'>
                            <div className='sider-left-nav-childer-n'>
                                {this.props.aside}
                            </div>
                        </div>
                    </aside>
                    {/* 中心内容 */}
                    <div className='layout-content'>
                        <header className='layout-content-header'></header>
                        {/* 顶部导航栏 */}
                        <header className='layout-content-header layout-header-fixed'>
                            {this.props.header}
                        </header>
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}
