import React, {Component} from 'react';

class Counter extends Component {
  state={
    count: 1

  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  getCount = () => (this.state.count === 0 ? "zero" : this.state.count)

  render(){
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.getCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    )
  }



}
export default Counter;
