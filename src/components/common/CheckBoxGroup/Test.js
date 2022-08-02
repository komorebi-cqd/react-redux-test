import React from 'react';
import CheckBoxGroup from './index';
import { getAllStudent } from '../../../api';



export default class Test extends React.Component {
    state = {
        datas: [],
        chooseDatas: [],

    }
    async componentDidMount(){
        const stus = await getAllStudent();
        this.setState({
            datas: stus.map(it => (
                { value: it.id.toString(), text: it.name }
            ))
        })
    }
    handleChange = (newArr) => {
        this.setState({
            chooseDatas: newArr
        })
    }

    render() {
        return (
            <CheckBoxGroup name="loves" {...this.state} onChange={this.handleChange} />
        )
    }
}