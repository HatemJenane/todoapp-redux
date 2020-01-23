

import { connect } from 'react-redux'
import React, { Component } from 'react'
import Popup from "reactjs-popup";
class popUp extends Component {
    constructor(props){
    super(props)
    this.state={
        inputEdit:this.props.text
    }
}
    handleChange = (event) => {
        this.setState({
            inputEdit:event.target.value
        }); 
        this.props.edit(this.props.theId,this.state.inputEdit)
      }
    render() {
        return (
            <div>
                <Popup trigger={<svg className='icon'
  xmlns="http://www.w3.org/2000/svg"
  width="512"
  height="512"
  viewBox="0 0 58 58"
>
  <g fill="none" fillRule="evenodd">
    <rect
      width="50"
      height="50"
      y="8"
      fill="#f3d55b"
      fillRule="nonzero"
      rx="6"
    ></rect>
    <path
      fill="#802f34"
      fillRule="nonzero"
      d="M42.69 12.49L22.24 32.94a.118.118 0 00-.05.05h-.01a2.001 2.001 0 00-2.83-2.83l20.51-20.5zM27.84 38.65a2.001 2.001 0 00-2.83-2.83l20.5-20.51 2.84 2.84z"
    ></path>
    <path
      fill="#ff5364"
      fillRule="nonzero"
      d="M56.83 9.66l-4.95 4.95-8.49-8.49 4.95-4.95a4.008 4.008 0 015.66 0L56.83 4a4.008 4.008 0 010 5.66z"
    ></path>
    <path
      fill="#fdd7ad"
      fillRule="nonzero"
      d="M51.879 3.293a1 1 0 10-1.414 1.414 1 1 0 001.414-1.414zM47.636 6.121l-2.121 2.122a1 1 0 101.414 1.414l2.121-2.122a1 1 0 10-1.414-1.414z"
    ></path>
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M22.24 32.94l-.15.15"
    ></path>
    <g fillRule="nonzero">
      <path
        fill="#2c3e50"
        d="M20.15 41.87l-4.65 1.94a1 1 0 01-1.31-1.31l1.94-4.65a6.067 6.067 0 014.02 4.02z"
      ></path>
      <path
        fill="#f29c1f"
        d="M25.01 35.82a2 2 0 00-2.77-2.88l20.45-20.45 2.82 2.82z"
      ></path>
      <path
        fill="#f9eab0"
        d="M27.84 38.65l-7.69 3.22a6.067 6.067 0 00-4.02-4.02l3.22-7.69a2.001 2.001 0 112.83 2.83h.01a.118.118 0 01.05-.05 2 2 0 012.77 2.88 2.001 2.001 0 112.83 2.83zM6 13H5a1 1 0 010-2h1a1 1 0 010 2zM25 13H10a1 1 0 010-2h15a1 1 0 010 2zM46 54a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1z"
      ></path>
      <path
        fill="#35495e"
        d="M10 45H5a1 1 0 010-2h5a1 1 0 010 2zM41 45H25a1 1 0 010-2h16a1 1 0 010 2zM28 50H5a1 1 0 010-2h23a1 1 0 010 2zM41 50h-7a1 1 0 010-2h7a1 1 0 010 2z"
      ></path>
      <path
        fill="#bdc3c7"
        d="M51.88 14.61l-3.53 3.54-8.49-8.49 3.53-3.54z"
      ></path>
    </g>
  </g>
</svg>} position="right center">
    <input type='text' value={this.state.inputEdit} onChange={this.handleChange}></input>
  </Popup>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return ({
        edit : (id,newinputValue)=>{
            dispatch({type:'EDIT_INPUT',id:id,val:newinputValue})
        }
    })
}
export default connect(null,mapDispatchToProps) (popUp);
