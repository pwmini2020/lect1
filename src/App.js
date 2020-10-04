import React from 'react';
import './App.css';
import { multiplyNumbers, substractNumbers as subst } from './imports/MathHelper';
import addNumbers from './imports/MathHelper';
import * as MathOperations from './imports/MathHelper';

import { Rectangle } from './imports/Shapes';

class App extends React.Component {

  // this is class property, declared and instantiated in ES7 syntax
  myProperty = "This is modern ES7 property";

  // this is class method, declared and instantiated in ES7 syntax
  myMethod = () => {
    console.log('This is modern ES7 method');
  }

  // this is also a class method but classical one (ES6)
  functionOne() {
    console.log('I am function one');
  }

  // this class will throw an error because of 'this' operator
  // to fix it, change it to arrow function
  functionTwo() {
    this.functionOne();
    console.log('I am function two');
  }

  playWithMath() {
    multiplyNumbers(1, 2);
    subst(1, 2);
    MathOperations.substractNumbers(2, 3);
    addNumbers(1, 2);
  }

  playWithShapes() {
    const rec = new Rectangle(2, 5);
    rec.printColour();
    rec.printSize();
  }

  render() {
    return (
      <div className="App">
        Test whatever you want
        <button className="buttonPressMe" onClick={this.playWithShapes}>Press me</button>
      </div>
    );
  }
}

export default App;
