import React from 'react';
import './page.css';


export default function Page(props) {

    //当前页码 current
    //总数 total
    //可见页码数 visNumber
    //每页显示的条数 limit
    const pages = pageNumber(props);//总页数
    const min = minPage(props,pages);
    const max = maxPage(props,min);
    let pageArr = [];
    for(let i = min; i<= max; i++){
        pageArr.push(
            <span className={props.current === i? "item active" : "item"} key={i} onClick={() => toPage(i,props)}>{i}</span>
        )
    }
    return (
        <>
            <span className={props.current === 1 ? "item disable" : "item"} onClick={() => toPage(1,props)}>首页</span>
            <span className={props.current === 1 ? "item disable" : "item"}  onClick={() => toPage(props.current - 1 < 1 ? 1 : props.current - 1,props)}>上一页</span>
            {pageArr}
            <span className={props.current === pages ? "item disable" : "item"} onClick={() => toPage(props.current + 1 > pages ? pages : props.current + 1,props)}>下一页</span>
            <span className={props.current === pages ? "item disable" : "item"} onClick={() => toPage(pages,props)}>尾页</span>
            <span>{props.current}</span>
            /
            <span>{pages}</span>
        </>
    )
}

/**
 * 
 * @param {*} props 
 * @returns 总页数
 */
function pageNumber(props) {
    return Math.ceil(props.total / props.limit);
}

/**
 * 
 * @param {*} props 
 * @param {*} pages 总页数
 * @returns 最小页码
 */
function minPage(props,pages){
    let min = props.current - Math.floor(props.visNumber/2);
    if(min < 1){
        return 1
    }
    if(min > pages - props.visNumber + 1){
        return pages - props.visNumber + 1;
    }
    return min;
}

/**
 * 
 * @param {*} props 
 * @param {*} min 最小页码 
 * @returns 最大页码
 */
function maxPage(props,min){
    return min + props.visNumber -1;
}


/**
 * 
 * @param {*} target 要跳转的页码 
 * @param {*} props 
 * @returns 
 */
function toPage(target,props){
    if(props.current === target){
        return;
    }
    props.onChangePage && props.onChangePage(target);
}



// function firstPage(page){
//     if(page === 1){
//         return;
//     }

// }

// function prevPage(page){

// }