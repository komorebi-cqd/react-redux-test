import React from 'react';

export default function Student(props){
    return (<li>
        【姓名】：{props.name}
        【地址】：{props.address}
        【邮箱】：{props.email}
    </li>)
}



