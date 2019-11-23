import React from 'react';
import {connect} from "react-redux";
import {addTask} from '../../actions/index';
import {bindActionCreators} from 'redux'

class TaskBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: ''
        };
        this.getInputVal = this.getInputVal.bind(this);
    }

    getInputVal = (val) => {
        this.setState({inputText: val})
    };

    render() {
        return(
            <div>
                <form>
                <input
                    type="text"
                    onChange={(e) => this.getInputVal(e.target.value)}
                    value={this.state.inputText}
                    placeholder="Add a tasks"
                    className="form-control addToInput"
                />
                <button onClick={() => this.props.addTask(this.state.inputText)} className="btn btn-success">Add Task</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addTask
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(TaskBar)