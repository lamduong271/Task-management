import * as types from "./../constants/ActionTypes";

export const list_all =()=>{
return{
  type:types.LIST_ALL

}
};

export const save_task=(task)=>{
  return{
    type:types.SAVE_TASK,
    task
  }
}

export const toggleForm=()=>{
  return{
    type:types.TOGGLE_FORM
  }
}

export const openForm=()=>{
  return{
    type:types.OPEN_FORM
  }
}


export const closeForm=()=>{
  return{
    type:types.CLOSE_FORM
  }
}

export const onUpDateStatus=(id)=>{
  return {
    type:types.UPDATE_STATUS,
    id
  }
}

export const onDeleteTask=(id)=>{
  return{
    type:types.DELETE_TASK,
    id
  }
}

export const editTask=(task)=>{
  return {
    type:types.EDIT_TASK,
    task
  }
}

export const filter_table=(filter)=>{
  return {
    type:types.FILTER_TABLE,
    filter
  }
}

export const search=(keyword)=>{
  return {
    type:types.SEARCH,
    keyword
  }
}

export const sort=(sort)=>{
  return{
    type:types.SORT,
    sort
  }
}
