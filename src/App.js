import React, { Component } from 'react';
import './App.css';
import FormAdd from './Components/formAdd.js';
import Control from './Components/Control';
import Table from './Components/table';
import {connect} from "react-redux";
import * as actions from "./actions/index";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      filter:{
        name:"",
        status:-1
      }
    };
    }

  onChangeClass=()=>{
    this.props.onClearTask({
      id:"",
      name:"",
      status:false
    });
    if(this.props.editTask && this.props.editTask.id!==""){
      this.props.onOpenForm();
    }
    else{
      this.props.onToggleForm();

    }
}


  render() {

    var {columnDisplay}=this.props;
    return (
      <div className="container padding">
          <h1>Tasks Management</h1>
          <hr/>

          <div className={columnDisplay?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>
            <FormAdd />
            </div>

          <div className={columnDisplay?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
          <button onClick={this.onChangeClass} className="btn btn-primary"><span className="glyphicon glyphicon-plus"></span> Add task </button>

          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
          <Control/>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Table   />

          </div>
          </div>




        </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    columnDisplay:state.isDisplayForm,
    editTask:state.editTask
  }
}
const mapDispatchToProps=(dispatch,props)=>{
  return{
    onToggleForm :()=>{
      dispatch(actions.toggleForm());
    },
    onClearTask:(task)=>{
      dispatch(actions.editTask(task));
    },
    onOpenForm:()=>{
      dispatch(actions.openForm());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
