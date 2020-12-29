import React, { Component } from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters: [
       {id: 1,  value: 0},
       {id: 2,  value: 0},
       {id: 3,  value: 0},
       {id: 4,  value: 0} 
    ]
 };
 handleDelete = (counterId) => {
    console.log("Event handler called", counterId);
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({ counters }); //"counters: counters" is not necessary 
     console.log(this.state.counters);

};

handleIncrement = (counter) => { 
    //console.log(this.state.counters); 
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {... counter}; //the counter object we recieved as an argument
    counters[index].value++;        // that way we dont modify the original object in the array
    this.setState({counters});
};

handleReset = () => {
    const counters = this.state.counters.map(c =>{
        c.value=0;
        return c;
    })
    this.setState(counters);

};
  render() { 
    return (  
      <React.Fragment>
      <NavBar></NavBar>
      <main className="container">
        <Counters/>
      </main>
      </React.Fragment>
    );
  }
}
 
export default App;
