import React from "react";

class ClassTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    //Montar componente
    componentDidMount() {

        this.interval = setInterval(() => {
            //Se actualiza el reloj por segundo
            this.setState(() => ({
                time: new Date()
            }));
            //console.log(this.state.time);

        }, 1000);
    }

    //Actualizar componente
    componentDidUpdate() {
        //console.log("ClassTimer - componentDidUpdate");
    }

    //Desmontar componente
    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("ClassTimer - componentWillUnmount");
    }

    render() {
        return (
            <>
                <h1>Componente de clase</h1>
                <h2>son las {this.state.time.toLocaleTimeString()}</h2>
            </>
        );
    }
}

export default ClassTimer;