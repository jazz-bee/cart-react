import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    
    render() { 
        return ( 
        <div>
            {this.props.counters.map(counter => 
                <Counter 
                key={counter.id} 
                onDelete={this.props.onDelete} 
                onIncrement={this.props.onIncrement}
                counter = {counter} // we pass the object not the properties one by one
                /> 
            )}
            <button onClick={() => this.props.onReset()} className="btn btn-sm" >Reset</button>
        </div> 
        );
    }
}
 
export default Counters;