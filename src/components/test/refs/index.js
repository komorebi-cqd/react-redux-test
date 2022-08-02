import React from "react";
// import { random } from '../../../utils';
import FancyInput from "./FancyInput";

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    // changeColor = () => {
    //     this.myRef.current.style.color = `rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},1)`;
    // }

    printRef = () => {
        console.log(this.myRef);
    }


    render() {
        return <div>
            <div onClick={this.printRef}>click</div>
            <FancyInput ref={this.myRef} onClick={this.printRef}>click</FancyInput>
        </div>
    }

}