import React, { useState, useEffect } from "react";
import { getPagination } from "../../../api";

import Pager from "./pager";
import PageContent from "./pageContent";


export default function Pagination() {
    const [data, setData] = useState([]); //分页数据
    const [current, setCurrent] = useState(1);//当前页
    const [total, setTotal] = useState(0); //总条数
    const [limit,] = useState(10); //每页显示页数
    const [visNumb,] = useState(5); //总页数


    useEffect(() => { //设置总页数
        (async () => {
            const result = await getPagination({ page: current, size: limit });
            setTotal(result.cont);
            setData(result.findByPage);
        })();
    }, [current, limit])

    const handleClick = (numb) => {
        setCurrent(numb)
    }

    return (
        <>
            <PageContent data={data} />
            {data.length > 0 && <Pager current={current} total={total} visNumb={visNumb} limit={limit} setCurrent={handleClick} />}
            
        </>

    )
}