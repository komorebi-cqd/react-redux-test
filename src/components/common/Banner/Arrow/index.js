import React, { Component } from "react";
import "./index.css"

export default class Arrow extends Component {

    handleClick = (arraw) => {
        this.props.onClick(arraw);
    }

    render() {
        return (
            <div className="arrow">
                <div className="arrow-left" onClick={() => {
                    this.handleClick("left")
                }}>
                    &lt;
                </div>
                <div className="arrow-right" onClick={
                    () => {
                        this.handleClick("right")
                    }
                }>
                    &gt;
                </div>
            </div>
        )
    }
}