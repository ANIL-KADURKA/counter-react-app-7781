// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClicked = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div className="container">
        <h1 className="head">
          The Button has been Clicked {'\n'}
          <span className="spanner">{count} </span> times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button className="button" onClick={this.onClicked} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
