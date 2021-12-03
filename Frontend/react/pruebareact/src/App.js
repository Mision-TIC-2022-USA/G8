import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';

function App() {
  return (
    <div>
      <HelloMessage nombre="Angel" apellido="Morales" />
      <HelloMessage nombre="Mario" apellido="Casas"  />
      <HelloMessage nombre= "Maria" apellido="Perez"  />
    </div>
  );
}

export default App;
