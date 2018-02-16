import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from "./../actions/index";
class Item extends Component {
onChangeStatus =()=>{
  var {task}=this.props;
  this.props.onUpDateStatus(task.id);
}
onDelete = () =>{
  this.props.onDeleteTask(this.props.task.id);
  this.props.closeForm();
}
onUpdate=()=>{
  //this.props.onUpdate(this.props.task.id);
  this.props.openForm();
  this.props.editTask(this.props.task);
}
render() {
var {task,index}=this.props;

  return (

      <tr>
        <td>{index}</td>
        <td>{task.name}</td>
        <td className="text-center">
            <span onClick={this.onChangeStatus} className={task.status?"label label-danger":"label label-warning"}>{task.status?"Active":"Deactive"}</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <span onClick={this.onUpdate} className="fa fa-pencil">Fix</span>
          </button>
          &nbsp;
          <button type="button" className="btn btn-warning">
            <span onClick={this.onDelete} className="fa fa-trash">delete</span>
          </button>
        </td>

      </tr>



    );
  }
}
const mapStateToProps =(state)=>{
  return{

  }
}
const mapDispatchToProps=(dispatch,props)=>{
  return {
    onUpDateStatus:(id)=>{
      dispatch(actions.onUpDateStatus(id));
    },
    onDeleteTask:(id)=>{
      dispatch(actions.onDeleteTask(id));
    },
    closeForm:()=>{
      dispatch(actions.closeForm());
    },
    openForm:()=>{
      dispatch(actions.openForm());
    },
    editTask:(task)=>{
      dispatch(actions.editTask(task));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Item);
