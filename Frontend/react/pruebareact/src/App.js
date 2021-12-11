import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
import TodoApp from './componentes/TodoApp';
import ClassTimer from './componentes/ClassTimer';
import FunctionTimer from './componentes/FunctionTimer';
import { DataContext } from './componentes/DataContext';
import { useState } from 'react';

function App() {

  let localUser = {
    nombre: 'Juan',
    apellido: 'Peréz',
  }

  const [user,setUser] = useState(localUser);

  return (
    <>
      <DataContext.Provider value={{user,setUser}}>
        <HelloMessage />
        <TodoApp  />
        <ClassTimer  />
        <FunctionTimer />
      </DataContext.Provider>
    </>
  );
}

export default App;
