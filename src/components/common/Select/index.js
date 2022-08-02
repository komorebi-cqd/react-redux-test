import React from "react";
import PropTypes from "prop-types";
import withDataGroup from "../Hoc/withDataGroup";

class Option extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        info: PropTypes.shape({
            value: PropTypes.string,
            text: PropTypes.string
        }),
        value: PropTypes.string

    }

    render() {
        return (
            <option
                value={this.props.info.value}
            >{this.props.info.text}</option>
        )
    }
}

const Options = withDataGroup(Option);

export default function Select(props){

    return(
        <select value={props.value} onChange={e => {
            props.onChange && props.onChange(e.target.value)
        }}>
            <Options {...props}/>
        </select>
    )
}

