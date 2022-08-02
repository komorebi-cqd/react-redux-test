import React, { createRef,useEffect } from "react";
// import { useEffect } from "react-dom";

const ref = createRef();


function Input(props, ref) {
    return (
        <>
            {props.children}
            <input type="text" ref={ref} />
        </>
    )
}


const NewInput = React.forwardRef(Input);


export default function ForwardRefComp() {
    useEffect(() => {
    })
    const handleClick = () => {
        ref.current.focus();
    }
    return (
        <div>
            <NewInput ref={ref} >请输入：</NewInput>
            <button onClick={handleClick}>点击聚焦</button>
        </div>
    )
}