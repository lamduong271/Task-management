import *as types from "./../constants/ActionTypes";


var s4=()=>{
  return Math.floor((1+Math.random())*0x1000).toString(16).substring(1);
}
var generateId=()=>{
  return s4() + s4()+"-"+s4()+"-"+s4()+"-"+s4()+s4()+"-"+s4();
}
var findIndexOftask=(tasks,id)=>{
  var result=-1;
  for(var i=0;i<tasks.length;i++){
    if(tasks[i].id===id){
      result=i;
    }
  }
  return result;
}
var data =JSON.parse(localStorage.getItem("task"));
 var initialState=data?data:[];
 var reducer=(state=initialState,action)=>{
   switch(action.type){

     case types.LIST_ALL:
        return state;

     case types.SAVE_TASK:
     var task={
       id:action.task.id,
       name:action.task.name,
       status:action.task.status
     };
     if(!task.id){
       task.id=generateId();
       state.push(task);
     } else{
       var indexOfSave=findIndexOftask(state,task.id);
       state[indexOfSave]=task;
       }


        localStorage.setItem("task",JSON.stringify(state));
        return [...state];

      case types.UPDATE_STATUS:
        var index=findIndexOftask(state,action.id);
        var taskChange={...state[index]};
        taskChange.status=!taskChange.status;
        if(index!==-1){
          state[index]=taskChange
        }
        localStorage.setItem("task",JSON.stringify(state));
        // state[index]={
        //   ...state[index],
        //   status:!state[index].status
        // };
        return [...state];

        case types.DELETE_TASK:
        var indexDelete=findIndexOftask(state,action.id);
        state.splice(indexDelete,1);
        localStorage.setItem("task",JSON.stringify(state));
        return [...state];

      default:
        return state;
   }

 }
 export default reducer;
