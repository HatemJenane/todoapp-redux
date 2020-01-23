
const mainReducer = (state=[] ,action)=>{
    if(action.type==='ADD_INPUT'){
      return state=[...state,action.value]
    }
    if(action.type==='REMOVE_INPUT'){
      return state.filter(el=>el.id!==action.id)
    }
    if(action.type==='COMPLETE_INPUT'){
      return state.map((el,i)=>el.id===action.id?{...el,isComplete:!el.isComplete}:el)
    }
    if(action.type==='EDIT_INPUT'){
      return state.map((el,i)=>el.id===action.id?{...el,inputValue:action.val}:el)
    }
    return state
  }
  
  
  export default mainReducer