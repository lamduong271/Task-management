import React, { Component } from 'react';
import Search from './search';
import Sort from './sort';
class Control extends Component{

  render(){
    return(
<div className="search">

      <Search/>
      <Sort/>
      </div>
    )
  }
}
export default Control;
