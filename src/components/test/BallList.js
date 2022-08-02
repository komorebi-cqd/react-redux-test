import React from "react";
import Ball from "./Ball";
import { random } from '../utils'
export default class BallList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ballList: []
        }
        const timer = setInterval(() => {
            let info = {
                size: 50,
                xSpeed: random(50, 500),
                ySpeed: random(50, 500),
                left: random(0, document.documentElement.clientWidth),
                top: random(0, document.documentElement.clientHeight),
                bg: `rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},1)`
            }
            this.setState({
                ballList: [...this.state.ballList, info]
            })
            if(this.state.ballList.length > 20){
                clearInterval(timer);
            }
        }, 200)
    }

    render() {
        const balls = this.state.ballList.map((item, i) => <Ball key={i} {...item} />)
        return (
            <div>
                {balls}
            </div>
        )
    }
}