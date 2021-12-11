import React from 'react';
import "./HelloMessage.css";
import { DataContext } from './DataContext';
class HelloMessage extends React.Component {

static contextType = DataContext;

    //Montaje
    componentDidMount() {
        console.log('HelloMessage componentDidMount');
    }

    //actualizacion
    componentDidUpdate() {
        console.log('HelloMessage componentDidUpdate');
    }

    //destruccion
    componentWillUnmount() {
        console.log('HelloMessage componentWillUnmount');
    }

    render() {

        function formatNombre(user) {
            return user.nombre + ' ' + user.apellido;
        }

        function getSaludo(user) {
            if (user)
                return <h1>Hola {formatNombre(user)}</h1>

            return <h2>Hola desconocido</h2>;
        }

        const {user} = this.context;
      
        return (
            <>
              <div className = "titulo" >{getSaludo(user)} </div>
            </>
        );
    }
}

export default HelloMessage;