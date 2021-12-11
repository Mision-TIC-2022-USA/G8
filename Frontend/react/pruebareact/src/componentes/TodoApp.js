import React from "react";
import { DataContext } from "./DataContext";

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

  static contextType = DataContext;
  //button
  handleClick(event) {
    //console.log(event.target.value);

    //Eliminar localStorage
    //localStorage.removeItem("text");
    //limpiar localStorage
    //localStorage.clear();

    //obtener un valor
    //const texto = localStorage.getItem("text");
    //console.log(texto);

    if (this.state.text.length === 0) {
      return;
    }

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

    //localstorage
    //localStorage.setItem("text", event.target.value);

  }

  handleChangeSelect = (event) => {
    console.log(event.target.value);
  }

  render() {

    const { user, setUser } = this.context;

    const frutas = [
      { id: 1, nombre: "Manzana" },
      { id: 2, nombre: "Naranja" },
      { id: 3, nombre: "Uvas" }
    ];

    return (
      <>
        <h3>Tareas pendientes</h3>

        <ul>
          {this.state.items.map((item) => (
            <li key={item.id}> {item.text} </li>
          ))}
        </ul>
        <pre>user {JSON.stringify(user, null, 2)}  </pre>

        <label>¿Qué necesito hacer? </label>
        <textarea
          // type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>
          Añadir #{this.state.items.length + 1}{" "}
        </button>
        <button onClick=
          {
            () => setUser({
              nombre: "modificado",
              apellido: "desde TodoApp"
            })
          }  >modificar datos globales</button>

        <select onChange={this.handleChangeSelect}>
          <option value="">Seleccione una opción</option>
          {
            frutas.map((fruta) => {
              return <option key={fruta.id} value={fruta.id}>{fruta.nombre}</option>
            })
          }
        </select>
      </>
    );
  }
}

export default TodoApp;
