const appkey = "demo13_1545210570249";

export async function getAllStudent() {
    return await fetch("http://open.duyiedu.com/api/student/findAll?appkey=" + appkey)
        .then(resp => resp.json())
        .then(resp => resp.data)
}


export async function getPagination({ page = 1, size = 10 }) {
    return await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`).then(resp => resp.json())
        .then(resp => resp.data);
}