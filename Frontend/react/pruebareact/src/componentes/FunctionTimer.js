import { useState, useEffect } from "react";

const FunctionTimer = (props) => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
       console.log("useEffect");

       const interval = setInterval(() => {
           console.log("setInterval");
            //Se actualiza el reloj por segundo
            setTime(new Date());
            //console.log(this.state.time);

        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("Componente desmontado");
        }

    },[]);
    


    return (
        <>
            <h1>Componente de funcion</h1>
            <h2>son las {time.toLocaleTimeString()}</h2>
        </>
    )
}

export default FunctionTimer;