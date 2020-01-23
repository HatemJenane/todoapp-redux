import React, { Component } from 'react';
import {connect} from "react-redux"
import Editbtn from './popUp'
class Main extends Component {
  

  render() { 
    return (  
      <div>
        {this.props.todo.map(el=>
        <div className='todo'>
           <svg onClick={()=>{this.props.complete(el.id)}} className='icon'   
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M437.019 74.98C388.667 26.629 324.38 0 256 0 187.619 0 123.331 26.629 74.98 74.98 26.628 123.332 0 187.62 0 256s26.628 132.667 74.98 181.019C123.332 485.371 187.619 512 256 512c68.38 0 132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.981-181.02zM256 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z"></path>
      <path d="M378.305 173.859c-5.857-5.856-15.355-5.856-21.212.001L224.634 306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l80.333 80.333a14.953 14.953 0 0010.606 4.393c3.838 0 7.678-1.465 10.606-4.393l143.066-143.066c5.858-5.857 5.858-15.355 0-21.213z"></path>
    </svg>
        <h1 className={el.isComplete===true&&'test'}
         key={el.id}>
         {el.inputValue}
         </h1>
         <div className='editremove'>
         <Editbtn text={el.inputValue} theId={el.id} />
         <svg className='icon' onClick={()=>{this.props.remove(el.id)}}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 511.999 511.999"
      version="1.1"
      viewBox="0 0 511.999 511.999"
      xmlSpace="preserve"
    >
      <circle cx="255.999" cy="255.999" r="255.999" fill="#E21B1B"></circle>
      <g fill="#FFF">
        <path
          d="M244.002 120.008H268.002V391.996H244.002z"
          transform="rotate(-45.001 256 256.007)"
        ></path>
        <path
          d="M120.008 244.007H391.996V268.007H120.008z"
          transform="rotate(-45.001 256 256.01)"
        ></path>
      </g>
    </svg>
    </div>
         </div>
         )}
      </div>
    );
  }
}
const mapStateToProps =(state)=>{
  return {
    todo:state.main
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    remove:(id)=>{
      dispatch ({type:'REMOVE_INPUT',id:id})
    },
    complete:(id)=>{
      dispatch ({type:'COMPLETE_INPUT',id:id})
    }

  }
}
 
export default connect(mapStateToProps,mapDispatchToProps) (Main);