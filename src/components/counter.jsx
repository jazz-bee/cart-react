import React, {Component} from 'react';

class Counter extends Component {
  state={
    count: 4
    
  };
  render(){
    
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}
export default Counter;
