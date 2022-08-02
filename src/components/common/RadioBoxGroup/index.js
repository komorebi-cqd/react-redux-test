import React from "react";
import withDataGroup from "../Hoc/withDataGroup";
import PropTypes from "prop-types";



function RadioBox(props) {
    return (
        <label>
            <input
                type="radio"
                name={props.name}
                value={props.info.value}
                onChange={e => props.onChange && props.onChange(e.target.value)}
                checked={props.info.value === props.value}
            />
            {props.info.text}
        </label>
    )
}


RadioBox.propTypes = {
    name: PropTypes.string.isRequired,
    info: PropTypes.shape({
        value: PropTypes.string,
        text: PropTypes.string
    }),
    onChange: PropTypes.func,
    value: PropTypes.string
}


export default withDataGroup(RadioBox)

// export default function RadioBoxGroup(props) {

//     return (
//         <div>
//             {getRadioBox(props)}
//         </div>
//     )
// }

// function getRadioBox(props) {
//     return props.datas.map(it => (
//         <label key={it.value}>
//             <input type="radio"
//                 name={props.name}
//                 value={it.value}
//                 checked={it.value === props.chooseDatas}
//                 onChange={e => props.onChange(e.target.value)}
//             />
//             {it.text}
//         </label>
//     ))
// }

