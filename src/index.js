import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css.bootsrtap.css' //lo agrego
class alala extends Component {
  render() {
    return (
        <div>
          dassdfsa
        </div>
    );
  }
}


// const element = <h1> hello world</h1>;
// //importo react xq lo usa babel en el react/createelement
// console.log(element); // para ver el react element en la consola del browser (este element es pare del virtual DOM)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
