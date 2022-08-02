import React,{useState,useEffect} from "react";


export default function StudentList(){
    const [data,setData] = useState([]);

    useEffect(() => {
        (async ()=> {//请求分页数据
            const result =await getPagination({current,limit})
            setData(result.findByPage);
            setTotal(result.cont);
        })();
    },[current,limit])

}