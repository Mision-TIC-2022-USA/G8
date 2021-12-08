import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
import TodoApp from './componentes/TodoApp';

function App() {

  let user = {
    nombre: 'Juan',
    apellido: 'Peréz',
  }

  return (
    <>
      <HelloMessage user = {user} />
      <TodoApp/>
    </>
  );
}

export default App;
