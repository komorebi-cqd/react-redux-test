import React from 'react';
import { random } from '../../utils'



export default class Ball extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: this.props.size || 50,
            xSpeed: random(50, 500),
            ySpeed: random(50, 500),
            left: this.props.left || 0,
            top: this.props.left || 0,
            bg: `rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},1)`
        }
    }
    moveBall(duration) {
        const xDis = (this.state.xSpeed * duration) / 1000;
        const yDis = (this.state.ySpeed * duration) / 1000;
        let newLeft = this.state.left + xDis;
        let newTop = this.state.top + yDis;
        if (newLeft >= document.documentElement.clientWidth - this.state.size) {
            this.setState({
                xSpeed: -this.state.xSpeed
            })
        }
        if (newLeft <= 0) {
            this.setState({
                xSpeed: -this.state.xSpeed
            })
        }
        if (newTop >= document.documentElement.clientHeight - this.state.size) {
            this.setState({
                ySpeed: -this.state.ySpeed
            })
        }
        if (newTop <= 0) {
            this.setState({
                ySpeed: -this.state.ySpeed
            })
        }
        this.setState({
            top: newTop,
            left: newLeft
        })
    }

    componentDidMount() {
        const duration = 16;
        this.timer = setInterval(() => {
            this.moveBall(duration);
        }, duration);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        const ballStyle = {
            top: this.state.top,
            left: this.state.left,
            background: this.state.bg
        }
        return (
            <div className="ball" style={ballStyle}></div>
        )
    }
}