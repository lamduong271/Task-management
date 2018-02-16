import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from "./../actions/index";
class FormAdd extends Component {
  constructor(props){
    super(props);
    this.state={
      id:"",
      name:"",
      status:true
    };
    this.onHandleChange=this.onHandleChange.bind(this);
    this.onHandleSubmit=this.onHandleSubmit.bind(this);
  }
  componentWillMount(){

    var stateUpdated=this.props.editTask;
    if(stateUpdated!==null){
      this.setState({
        id:stateUpdated.id,
        name:stateUpdated.name,
        status:stateUpdated.status
      });
    }

  }
  componentWillReceiveProps(nextProps){
console.log("next"+nextProps);
    if(nextProps && nextProps.editTask){
      this.setState({
        id:nextProps.editTask.id,
        name:nextProps.editTask.name,
        status:nextProps.editTask.status
      });
    }
    else if(nextProps && nextProps.editTask===null){
      this.setState({
        id:"",
        name:"",
        status:true
      });
    };
  }

  onHandleChange(event){
    var target=event.target;
    var name=target.name;
    var valueInput=target.value;
    if(name==='status'){
      valueInput=target.value==="true"?true:false;
    }
    this.setState({
      [name]:valueInput
    })
  }
  onHandleSubmit(event){
    event.preventDefault();
    //this.props.onPassData(this.state);
    this.props.onSave(this.state);
    this.onClear();
    this.onCloseForm();

  }
  onCloseForm=()=>{
    this.props.onCloseForm();
  }
  onClear=()=>{
    this.setState({
      name:"",
      status:false
    });
  }
  render() {

if(!this.props.columnDisplay) return "";
      var{id}=this.state;
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-warning ">
              <div className="panel-heading"> {id===""?"Add task":"fix task"} <span onClick={this.onCloseForm} className="glyphicon glyphicon-remove-circle"></span></div>
              <div className="panel-body">
              <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                  <label >Task name</label><br/>
                  <input
                  type="text"
                  name="name"
                  onChange={this.onHandleChange}
                  value={this.state.name}/>
                </div>

                <div className="form-group">
                <label >Status</label><br/>
                <select
                className="form-control"
                name="status"
                onChange={this.onHandleChange}
                value={this.state.status}>
                    <option value={true}>Active</option>
                    <option value={false}>Deactive</option>
                    </select>
              </div>

                <button type="submit" className="btn btn-warning"><span className="glyphicon glyphicon-plus"> </span> Save</button>&nbsp;
                <button type="reset"className="btn btn-danger" onClick={this.onClear}><span className="glyphicon glyphicon glyphicon-remove"> </span> Delete</button>
              </form>
              </div>
            </div>
        </div>


    );
  }
}
const mapStateToProps=(state)=>{
  return{
columnDisplay:state.isDisplayForm,
editTask:state.editTask
  }
}
const mapDispatchToProp=(dispatch,props)=>{
  return{
    onSave:(task)=>{
      dispatch(actions.save_task(task));
    },
    onCloseForm:()=>{
      dispatch(actions.closeForm());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProp)(FormAdd);
