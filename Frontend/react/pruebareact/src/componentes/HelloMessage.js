import React from 'react';

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Message  
                    { " "+this.props.nombre + " " + this.props.apellido } 
                </h1>
            </div>
        );
    }
}

export default HelloMessage;