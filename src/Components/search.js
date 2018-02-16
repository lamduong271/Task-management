import React, { Component } from 'react';
import * as actions from "./../actions/index";
import {connect} from "react-redux";
class Search extends Component{
constructor(props){
  super(props);
  this.state={
    keyword:""
  }
}
onHandleChange=(event)=>{
  this.setState({
    keyword:event.target.value
  })
}
onSearch=()=>{
  this.props.onSearch(this.state.keyword);
}
  render(){
    return(

      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="input-group">
              <input
              type="text"
              className="form-control"
              value={this.state.keyword}
              onChange={this.onHandleChange}
              />
                <span className="input-group-btn">
                  <button onClick={this.onSearch} type="button" className="btn btn-primary">Search</button>
                </span>
              </div>
        </div>

    )
  }
}
const mapStateToProps=(state)=>{
  return {
    keyword:state.keyword
  }
}
const mapDispatchToProps=(dispatch,props)=>{
  return{
    onSearch:(keyword)=>{
      dispatch(actions.search(keyword))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);
