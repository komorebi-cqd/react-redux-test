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
                    <div className='sider-left-placeholder'></div>
                    <aside className='sider-left-nav'>
                        <div className='sider-left-nav-childer'>
                            <div className='sider-left-nav-childer-n'>
                                {this.props.aside}
                            </div>
                        </div>
                    </aside>
                    <div className='layout-content'>
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}
