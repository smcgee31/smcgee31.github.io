console.log('app.js is running');

const app ={
  title: 'Indecision App',
  subtitle: 'Put you life in the hands of a computer!',
  options: ['get milk', 'get haircut'],
};

const user = {
  name: 'Steve',
  age: 47,
  location: 'Pleasant Grove, UT',
};
const getLocation = (location) => {
  if (location) {
    return <p>{location}</p>;
  }
}

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }

  console.log('form submitted!');
};

const onRemoveAll = (e) => {
  app.options = [];
  renderTemplate();
};

const onMakeDecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];

  console.log(option);
};

const appRoot = document.getElementById('app');
const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.subtitle && <p>{app.subtitle}</p> }
      
      { (app.options && app.options.length > 0) ? <p>Here are you options:</p> : <p>No options</p> }

      <button disabled={ app.options.length === 0 } onClick={ onMakeDecision }> What should I do? </button>
      <button onClick={ onRemoveAll }> Remove All </button>
      

      <ul type="none">
        { app.options.map((option, i) => <li key={ i }>{ option }</li>) }
      </ul>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button> Add Option </button>
      </form>

    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();

