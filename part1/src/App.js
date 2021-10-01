import './App.css';
import Mensaje from './mensajes';

const App = () => {
  const mensaje = 'Hola'

  return (
    <div>
      <p>{mensaje + ' evaluación en JSX'}</p>
      <Mensaje color="orange" message="Hola" />
      <Mensaje color="green" message="cómo" />
      <Mensaje color="blue" message="estás" />
    </div>
  )
}

export default App;
