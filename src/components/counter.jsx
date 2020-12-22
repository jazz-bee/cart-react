import React, {Component} from 'react';

class Counter extends Component {
  state={
    value: this.props.value, //gets initialized from counters.jsx
    tags: ['tag1','tag2','tag3']
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
 
  getCount = () => (this.state.value === 0 ? "zero" : this.state.value)

  handleIncrement = () => {
    //console.log("clicked");
    this.setState({value: this.state.value + 1}) ;
  };

  render(){
    console.log('props', this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.getCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    )
  }



}
export default Counter;
