import React, {Component} from 'react';

class Counter extends Component {
  state={
    count: 1,
    tags: ['tag1','tag2','tag3']
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
 
  getCount = () => (this.state.count === 0 ? "zero" : this.state.count)

  handleIncrement = () => {
    //console.log("clicked");
    this.setState({count: this.state.count += 1}) 

  }

  render(){
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.getCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    )
  }



}
export default Counter;
