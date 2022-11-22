import React from "react";

import './App.css'
import Buttons from './Buttons';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      out: '0'
    }
    this.refOutput = React.createRef()
  }


  tapeNumber(value) {
    let currentValue = value
    let output = this.refOutput.current
    this.setState({
      out: currentValue
    })
    if (output.value === '0') {
      output.value = ''
    }
    output.value += currentValue
  }

  tapeWork(value) {
    let output = this.refOutput.current

    if (value === 'AC') {
      output.value.length === 1 ? output.value = '0' : output.value = output.value.substring(0, output.value.length - 1)
     
    }
    else if (value == 'C') { output.value = '0' }
    else if (value === '=') {
    
      try {output.value = eval(output.value) }
      catch { output.value = 'Это невозможно' }
      setTimeout(()=> {
        output.value = 0
      }, 1500)
    }
  }

  render() {
    return (

      <div className="container">
        <h1>Calculator</h1>
        <div className="output">
          <input ref={this.refOutput} type="text" defaultValue={this.state.out} />
        </div>
        <div className="buttons">
          {Buttons.buttons.map((item,index) => {
            return <button key={index} onClick={() => {
              this.tapeNumber((item.val))
            }}>{item.val}</button>
          })}

          {Buttons.work.map((item,index) => {
            return <button key={index } onClick={() => {
              this.tapeWork((item.val))
            }}>{item.val}</button>
          })}
        </div>
      </div>
    )
  }
}
export default App;