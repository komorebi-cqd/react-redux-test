import React from 'react';
import Student from './Student';



export default class StudentList extends React.Component{
    render(){
        const studentList = this.props.stus.map((item,index) => {
            return <Student key={index} {...item}/>
        })

        return(
            <ul>
                {studentList}
            </ul>
        )
    }
}


