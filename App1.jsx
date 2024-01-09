import React from 'react';
class App extends React.Component {
   render() {
      return (
         <div>  
            <Change />
         </div>
      );
   }
}
class Change extends React.Component {
   constructor() {
      super();
      this.state = { color: '#000' };
   }
   componentDidUpdate() {
      console.log('componentDidUpdate method is called');
   }
   render() {
      return (
         <div>
            <h1 style={{ color: this.state.color }}>Hello</h1>
            <button onClick={() => this.setState({ color: '#0f0' })}>
               Change Color
            </button>
         </div>
      );
   }
}
export default App;