import React, { Component } from 'react';
import * as actions from "./../actions/index";
import {connect} from "react-redux";

class Sort extends Component{

onSort=(sortBy,sortValue)=>{
var sort={
  sortBy:sortBy,
  sortValue:sortValue
};
  this.props.onSort(sort);

}
  render(){
    return(

/*Sort*/
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 order">
      <button type="button" className="btn btn-primary dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">Sort</button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li onClick={()=>this.onSort("name",1)}>
          <a role="button" className="sort-selected">
            <span className="fa fa-sort-alpha-asc">
              A-Z
            </span>
          </a>
        </li>

      <li onClick={()=>this.onSort("name",2)}>
          <a role="button" className="sort-selected">
            <span className="fa fa-sort-alpha-desc">
              Z-A
            </span>
          </a>
        </li>

        <li onClick={()=>this.onSort("status",1)}>
          <a role="button" className="sort-selected">
            <span className="">
              Active
            </span>
          </a>
        </li>

        <li onClick={()=>this.onSort("status",2)}>
          <a role="button" className="sort-selected">
            <span className="">
              Deactive
            </span>
          </a>
        </li>

      </ul>
      </div>

    )
  }
}

const mapStateToProps=(state)=>{
  return {
    sort:state.sort
  }
}
const mapDispatchToProps=(dispatch,props)=>{
  return {
    onSort:(sort)=>{
      dispatch(actions.sort(sort));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sort);
