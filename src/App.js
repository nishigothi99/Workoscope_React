import React, {Component } from 'react';

class ShoppingList extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
class App {
  render(){
    return(
      <h1>hello</h1>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />

export default ShoppingList, default App;
