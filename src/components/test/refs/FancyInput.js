import React from "react";

// function FancyInput(props) {
//     return <button>
//         {props.children}
//     </button>
// }

const FancyInput = React.forwardRef((props, ref) => {
    return <button ref={ref} onClick={props.onClick}>
        {props.children}
    </button>
})


export default FancyInput;