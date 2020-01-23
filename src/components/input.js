import React, { Component } from 'react';
import {connect} from 'react-redux'
class Input extends Component {

  render() { 
    return (  
      <div>
        <input className='input' placeholder='TO DO list' type="text" onChange={(e)=>{this.props.hundelChange(e.target)}}/>
        <svg onClick={()=>{this.props.add(this.props.input)}} className='icon'
      xmlns="http://www.w3.org/2000/svg"
      width="512pt"
      height="512pt"
      viewBox="0 0 512 512"
    >
      <path
        fill="#2196f3"
        d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm0 0"
      ></path>
      <path
        fill="#fafafa"
        d="M368 277.332h-90.668V368c0 11.777-9.555 21.332-21.332 21.332s-21.332-9.555-21.332-21.332v-90.668H144c-11.777 0-21.332-9.555-21.332-21.332s9.555-21.332 21.332-21.332h90.668V144c0-11.777 9.555-21.332 21.332-21.332s21.332 9.555 21.332 21.332v90.668H368c11.777 0 21.332 9.555 21.332 21.332s-9.555 21.332-21.332 21.332zm0 0"
      ></path>
    </svg>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
return {
  hundelChange:(target)=>{
    dispatch ({type:'SET_INPUT',value:target.value})
  },
  add:(input)=>{
    let obj={}
    let inputValue=input
    let id=Math.floor(Math.random()*1000)
    obj={inputValue,id}
    dispatch ({type:'ADD_INPUT',value:obj})
  }
}
}
const mapStateToProps=(state)=>{
  return{
    input:state.input
  }
}

 
export default connect(mapStateToProps,mapDispatchToProps) (Input);