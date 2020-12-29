import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters: [
           {id: 1,  value: 4},
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

    render() { 
        return ( 
        <div>
            {this.state.counters.map(counter => 
                <Counter 
                key={counter.id} 
                onDelete={this.handleDelete} 
                onIncrement={this.handleIncrement}
                counter = {counter} // we pass the object not the properties one by one
                /> 
            )}
            <button className="btn btn-sm" >Reset</button>
        </div> 
        );
    }
}
 
export default Counters;