import { useState, useEffect, useContext } from "react";
import { DataContext } from "./DataContext";

const FunctionTimer = (props) => {

    const [time, setTime] = useState(new Date());
    const {user} = useContext(DataContext)

    useEffect(() => {
       console.log("useEffect");

       const interval = setInterval(() => {
           //console.log("setInterval");
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
            <pre>user { JSON.stringify(user,null,2) }  </pre>
            <h2>son las {time.toLocaleTimeString()}</h2>
        </>
    )
}

export default FunctionTimer;