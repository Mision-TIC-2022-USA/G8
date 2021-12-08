import React from "react";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //button
  handleClick(event) {
    //console.log(event.target.value);

    let newItem = {
      id: Date.now(),
      text: this.state.text,
    };
    console.log(newItem);

    this.setState((state) => ({
      //ES6
      //[...state.items,newItem]
      items: state.items.concat(newItem),
      text: "",
    }));
  }
  //input
  handleChange(event) {
    //no se hace
    //this.state.text = event.target.value;

    this.setState(() => ({
      text: event.target.value,
    }));
  }

  render() {
    return (
      <>
        <h3>Tareas pendientes</h3>

        <ul>
          {
          this.state.items.map((item) => (
            <li key={item.id}> {item.text} </li>
          ))
          }
        </ul>

        <label>¿Qué necesito hacer? </label>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Añadir #{this.state.items.length + 1} </button>
      </>
    );
  }
}

export default TodoApp;
