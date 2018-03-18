class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleResetCounter = this.handleResetCounter.bind(this);
    
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    try {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount);
      if (!isNaN(count)) { // not only if there is a count, but only if it is a NUMBER!
        this.setState(() => ({ count }));
      }
    } catch (error) {
      console.log('========= error =========\n', error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }
  
  
  
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count -1,
      };
    });
  }
  handleResetCounter() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={ this.handleAddOne }> +1 </button>
        <button onClick={ this.handleMinusOne }> -1 </button>
        <button onClick={ this.handleResetCounter }> Reset </button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
//   console.log('addOne');
// };
// const minusOne =() => {
//   count--;
//   renderCounterApp();
//   console.log('minusOne');
// };
// const resetCounter = () => {
//   count = 0;
//   renderCounterApp();
//   console.log('resetCounter');
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//       <h1>Count: { count }</h1>
//       <button onClick={addOne}> +1 </button>
//       <button onClick={minusOne}> -1 </button>
//       <button onClick={resetCounter}> Reset </button>
//     </div>
//   );

//   ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();
