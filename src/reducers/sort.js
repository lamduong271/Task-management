import *as types from "./../constants/ActionTypes";


 var initialState={
   sortBy:"",
  sortValue:1
 };
 var reducer=(state=initialState,action)=>{
   switch(action.type){
     case types.SORT:
     
      return {
        sortBy:action.sort.sortBy,
        sortValue:action.sort.sortValue
      };

     default:
        return state;
   }

 }
 export default reducer;
