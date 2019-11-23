import React from "react";
import {connect} from 'react-redux';
import Task from '../Task/task';

class TaskList extends React.Component{
    render() {
        return(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.tasks.map((task, index) =>
                {
                    return <Task key={index} task={task}/> })
                }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
};

export default connect(mapStateToProps)(TaskList)