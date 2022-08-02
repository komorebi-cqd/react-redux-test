import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withDataGroup from '../Hoc/withDataGroup';



class CheckBox extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        info: PropTypes.shape({
            value: PropTypes.string,
            text: PropTypes.string
        }),
        chooseDatas: PropTypes.array,
        onChange: PropTypes.func
    }
    handleChange = e => {
        let newArr;
        if(e.target.checked){
            newArr = [...this.props.chooseDatas,e.target.value]
        }else{
            newArr = this.props.chooseDatas.filter(it => it !== e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr);
    }

    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    value={this.props.info.value}
                    name={this.props.name}
                    checked={this.props.chooseDatas.includes(this.props.info.value)} 
                    onChange={ this.handleChange }/>
                {this.props.info.text}
            </label>
        )
    }
}


export default withDataGroup(CheckBox);

