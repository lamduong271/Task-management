import React, { Component } from 'react';
import Item from './item';
import {connect} from "react-redux";
import * as actions from "./../actions/index";
class Table extends Component {

constructor(props){
  super(props);
  this.state={
    filterName:"",
    filterStatus:-1
  };
}
onChange =(event)=>{
  var target=event.target;
  var name=target.name;
  var value=target.value;
  var filter ={
    name:name==="filterName"?value:this.state.filterName,
    status:name==="filterStatus"?value:this.state.filterStatus
  }
  this.props.filterTable(filter);
  this.setState({
    [name]:value
  });
}
render() {
console.log(this.props.sort);
var {tasks,filter,keyword,sort}=this.props;


//filter table
  if (filter.name) {
    tasks=tasks.filter((task)=>{
      console.log(task);
      return task.name.toLowerCase().indexOf(filter.name)!==-1
    });
  }
  tasks=tasks.filter((task)=>{
    if(filter.status===-1){
      return task;
    }
    else{
      return task.status===(filter.status===1?true:false);
    }
  });
//SEARCH

  tasks=tasks.filter((task)=>{
      return task.name.toLowerCase().indexOf(keyword.toLowerCase())!==-1
  });
//Sort
if(sort.sortBy==="name" && sort.sortValue===1){
  tasks.sort(function(a,b) {
  return b.name.toLowerCase() < a.name.toLowerCase();
});
}
if(sort.sortBy==="name" && sort.sortValue===2){
  tasks.sort(function(a,b) {
  return b.name.toLowerCase() > a.name.toLowerCase();
  });
}
if(sort.sortBy==="status" && sort.sortValue===1){
  tasks.sort(function(a,b) {
  return b.status > a.status;
  });
}
if(sort.sortBy==="status" && sort.sortValue===2){
  tasks.sort(function(a,b) {
  return b.status < a.status;
  });
}



var renderTaskArray=tasks.map((value,index)=>{
  return <Item  key={value.id} index={index} task={value}  />
});
  return (
<div className="table">
<table className="table table-bordered">
    <thead>
      <tr>
        <th>STT</th>
        <th>Name</th>
        <th>Status</th>
        <th>change</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td><input
        type="text"
        className="form-control"
        name="filterName"
        value={this.state.filterName}
        onChange={this.onChange}/>
        </td>
        <td><select className="form-control" name="filterStatus" value={this.state.filterStatus} onChange={this.onChange}>
            <option value={-1}>Hide all</option>
            <option value={1}>Active</option>
            <option value={0}>Deactive</option>
            </select>
        </td>
        <td></td>
      </tr>
      {renderTaskArray}

    </tbody>
  </table>
</div>


    );
  }
}
const mapStateToProps=(state)=>{
  return {
    tasks:state.tasks,
    filter:state.filterTable,
    keyword:state.search,
    sort:state.sort
  }
};
const mapDispatchToProps=(dispatch,props)=>{
  return{
    filterTable:(filter)=>{
      dispatch(actions.filter_table(filter));
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Table);
