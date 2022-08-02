import React, { Component } from "react";
import ImgSrcs from "./ImgSrcs";
import Arrow from "./Arrow";

import src1 from "./img/1.jpg";
import src2 from "./img/2.jpg";
import src3 from "./img/3.jpg";
import src4 from "./img/4.jpg";
import src5 from "./img/5.jpg";
import "./index.css";



export default class Banner extends Component {

    state = {
        srcs: [src1, src2, src3, src4, src5],
        width: 500,
        height: 300,
        curImg: 1,
        duration: 1000,
        jieliu: true
    }
    componentDidMount() {
        this.changeSrcs();
    }

    switchTo = (index) => {
        console.log('111');
        if (this.state.jieliu) {
            this.setState({
                duration: 1000,
                curImg: index,
                jieliu: false
            }, () => {
                if (index === 0) {
                    setTimeout(() => {
                        this.setState({
                            duration: 0,
                            curImg: this.state.srcs.length - 2
                        })
                    }, this.state.duration)
                }
                if (index === this.state.srcs.length - 1) {
                    setTimeout(() => {
                        this.setState({
                            duration: 0,
                            curImg: 1
                        })
                    }, this.state.duration)
                }
            })
            setTimeout(() => {
                this.setState({
                    jieliu: true
                })
            }, this.state.duration)
        } else {
            return;
        }
    }

    changeSrcs = () => {
        let newSrcs = [...this.state.srcs, this.state.srcs[0]];
        newSrcs.unshift(this.state.srcs[this.state.srcs.length - 1]);
        this.setState({
            srcs: newSrcs
        })
    }

    handleClick = (arrow) => {
        if (arrow === "left") {
            this.switchTo(this.state.curImg - 1)
        }
        if (arrow === "right") {
            this.switchTo(this.state.curImg + 1)
        }
    }

    render() {
        return (
            <>
                <div className="banner-container">
                    <ImgSrcs {...this.state} />
                    <Arrow onClick={this.handleClick} />
                </div>
                
                <button onClick={() => {
                    this.switchTo((this.state.curImg - 1) % this.state.srcs.length)
                }}>左滚动按钮</button>
                <button onClick={() => {
                    this.switchTo((this.state.curImg + 1) % this.state.srcs.length)
                }}>右滚动按钮</button>


            </>
        )
    }
}

