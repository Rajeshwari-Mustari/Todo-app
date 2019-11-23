import React from 'react';
import {connect} from 'react-redux'
import { deleteTask} from '../../actions/index'
import {bindActionCreators} from "redux";

class Task extends React.Component{
    render() {
        return (
                <tr className="">
                    <td>{this.props.task}</td>
                    <td>
                        <button onClick={() => this.props.deleteTask(this.props.id)}>Delete</button>
                    </td>
                </tr>
            );
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        deleteTask
    }, dispatch)
};

export default connect(() => {}, mapDispatchToProps)(Task)