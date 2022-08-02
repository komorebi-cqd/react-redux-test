import React, { Component } from 'react';
import Page from './Page';
import StudentList from './StudentList';


export default class PageList extends Component {

    state = {
        current: 1,
        total: 0,
        visNumber: 5,
        limit: 10,
        students: []
    }
    constructor(props){
        super(props);
        this.fetchStudentData();
    }

    handleChange = (number) => {
        this.setState({
            current: number
        },() =>{
            this.fetchStudentData();
        })
    }
   
    async fetchStudentData() {
        const resp = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`).then(resp => resp.json()).then(resp => resp.data);
        this.setState({
            students: resp.findByPage,
            total: resp.cont
        })
    }

    render() {
        return (
            <div className="container">
                <div className="list">
                    <StudentList stus={this.state.students} />
                </div>
                <div className="page" style={{ textAlign: "center" }}>
                    <Page
                        onChangePage={this.handleChange}
                        current={this.state.current}
                        total={this.state.total}
                        visNumber={this.state.visNumber}
                        limit={this.state.limit} />
                </div>
            </div>
        )
    }
}
