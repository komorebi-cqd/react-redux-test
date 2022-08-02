import React,{Component} from 'react';
import Tick from './Tick';


export default class TickControl extends Component{

    state = {
        isOver: false
    }
    constructor(props){
        super(props)
        this.handleOver = this.handleOver.bind(this);
    }

    handleOver(){
        this.setState({
            isOver: true
        })
    }

    render(){
        let text = '倒计时中';
        if(this.state.isOver){
            text = '倒计时完成'
        }

        return <div>
            <Tick number={10} handleOver={this.handleOver}/>
            <h2>{text}</h2>
        </div>
    }
}


