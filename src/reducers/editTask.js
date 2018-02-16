import *as types from "./../constants/ActionTypes";


 var initialState={
   id:"",
   name:"",
   status:false
 }; //close
 var reducer=(state=initialState,action)=>{
   switch(action.type){
     case types.EDIT_TASK:
     console.log("edit action "+action.task.name);
      return action.task;

     default:
        return state;
   }

 }
 export default reducer;
