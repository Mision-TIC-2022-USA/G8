import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';

function App() {

  let user = {
    nombre: 'Juan',
    apellido: 'Peréz',
  }

  return (
    <>
      <HelloMessage user = {user} />
      {/* <HelloMessage nombre="Mario" apellido="Casas" />
      <HelloMessage nombre="Maria" apellido="Perez" /> */}
    </>
  );
}

export default App;
