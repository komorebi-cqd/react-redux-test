import React from "react";


export default function PageContent(props){
    const list = [];
    for(let i = 0; i < props.data.length;i++){
        list.push(
            <li key={i}>地址：{props.data[i].address}；名字：{props.data[i].name}；电话：{props.data[i].phone}；性别：{props.data[i].sex === 1 ? "男" : "女"}</li>
        );
    }
    return(
        <ul>
            {list}
        </ul>
    )
}