class Visible extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.header = 'Visibility Toggle';
    this.state = {
      show: false,
    };
  }

  handleToggle() {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      };
    });
  }

  render() {
    return (
      <div>
      <h1>{ this.header }</h1>
      <button onClick={ this.handleToggle }>{ this.state.show ? 'Hide Details' : 'Show Details' }</button>
      { this.state.show && (
        <div>
          <p>You can see me now!</p>
        </div>
      )}
    </div>
    )
  }
}

ReactDOM.render(<Visible />, document.getElementById('app'));
