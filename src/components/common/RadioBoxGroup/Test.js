import React from 'react';
import RadioBoxGroup from './index';
import { getAllStudent } from '../../../api';



export default class Test extends React.Component {
    state = {
        datas: [],
        value: "",

    }
    async componentDidMount(){
        const stus = await getAllStudent();
        this.setState({
            datas: stus.map(it => (
                { value: it.id.toString(), text: it.name }
            ))
        })
    }
    handleChange = (value) => {
        this.setState({
            value
        })
    }

    render() {
        return (
            <RadioBoxGroup name="loves" {...this.state} onChange={this.handleChange} />
        )
    }
}