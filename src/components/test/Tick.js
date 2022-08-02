import React,{Component} from 'react';

export default class Tick extends Component{
    
    state = {
        number: this.props.number
    }

    timer = setInterval(() => {
        this.setState({
            number: this.state.number - 1
        })
        if(this.state.number === 0){
            clearInterval(this.timer);
            this.props.handleOver();
        }
    },1000)

    render(){
        
        return <div>倒计时：{this.state.number}</div>
    }
}