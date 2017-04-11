import React from 'react'
import ReactDom from 'react-dom'


export default React.createClass({
    getInitialState:function(){
      return{
        inputContent:'111'
      }
    },
    clickHidden:function(event){
      event.stopPropagation();
      event.preventDefault();
    var tipE= ReactDom.findDOMNode(this.refs.inputClear);
        if(tipE.style.display==="none"){
            tipE.style.display="inline";
        }else{
            tipE.style.display="none";
        }
    },
    changeContent:function(event){
        event.stopPropagation();
        event.preventDefault();
      this.setState({
          inputContent:event.target.value
      })

    },
  render:function(){
    return (
        <div>
          <span>hello </span>
          <button onClick={this.clickHidden}>显示|隐藏</button>
          <br/><br/>
          <input type="text" onChange={this.changeContent}/><span  ref="inputClear">{this.state.inputContent}</span>
        </div>
    )
  }
})
