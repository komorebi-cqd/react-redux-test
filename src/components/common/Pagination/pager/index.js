import "./index.css";
function visNumb(props, pageNumb) {
    let min = Math.ceil(props.current - props.visNumb / 2);
    if (min <= 0) {
        min = 1
    }
    if (min > pageNumb - props.visNumb) {
        min = pageNumb - props.visNumb + 1
    }
    let max = min + props.visNumb - 1;
    return {
        min, max
    }
}

export default function Pager(props) {
    /**
     * current  当前页
     * total 总数
     * visNumb 可见页数
     * limit  每页条数
     */
    const pageNumb = Math.ceil(props.total / props.limit); //总页数
    const { min, max } = visNumb(props, pageNumb);
    const list = [];
    const handleClick = (i) => {
        if (i <= 1) {
            i = 1
        }
        if (i >= pageNumb) {
            i = pageNumb
        }
        props.setCurrent(i)
    }
    for (let i = min; i <= max; i++) {
        list.push(
            <span
                key={i}
                className={props.current === i ? "active" : ""}
                onClick={() => {
                    handleClick(i);
                }}>{i}
            </span>
        )
    }
    return (
        <div className="pagination">
            <span
                className={props.current === 1 ? "disabled" : ""}
                onClick={() => {
                    if (props.current === 1) {
                        return
                    }
                    handleClick(1)
                }}>首页</span>
            <span
                className={props.current === 1 ? "disabled" : ""}
                onClick={() => {
                    if (props.current === 1) {
                        return
                    }
                    handleClick(props.current - 1)
                }}>上一页</span>
            {list}
            <span
                className={props.current === pageNumb ? "disabled" : ""}
                onClick={() => {
                    if (props.current === pageNumb) {
                        return
                    }
                    handleClick(props.current + 1)
                }}>下一页</span>
            <span
                className={props.current === pageNumb ? "disabled" : ""}
                onClick={() => {
                    if (props.current === pageNumb) {
                        return
                    }
                    handleClick(pageNumb)
                }}>尾页</span>
        </div>
    )
}


