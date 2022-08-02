import React from 'react';


export default class Form extends React.Component{
    state ={
        value: []
    }
    handleChange = (e) => {
        this.setState({
            value: [...this.state.value,e.target.value]
        })
    }
    handleSubmit = (e) =>{
        console.log(this.state.value);
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你喜欢的字母：
                    <select onChange={this.handleChange} multiple={true} value={this.state.value}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                </label>
                <button>打印value值</button>
            </form>
        )
    }
}