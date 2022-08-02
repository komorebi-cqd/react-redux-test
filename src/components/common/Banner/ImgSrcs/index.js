import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";



export default class ImgSrcs extends Component {
    static defaultProps = {
        srcs: [],
        width: 500,
        height: 300,
        curImg: 0,
        duration: 1000
    }


    static propsTypes = {
        srcs: PropTypes.array.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        curImg: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired
    }
  

    imgGroupStyle = () => {
        if (this.props.curImg === 0) {
            
        }
    }


    render() {
        const imgSrcs = this.props.srcs.map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: this.props.width, height: this.props.height }} />
        ))
        return (
            <div className="img-group" style={{
                transform: `translateX(${-(this.props.curImg * this.props.width) + "px"})`,
                transition: `all ${this.props.duration / 1000}s`
            }}>
                {imgSrcs}
            </div>
        )
    }
}