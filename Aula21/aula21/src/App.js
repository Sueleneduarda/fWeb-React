import './App.css';

import Counter from './componentes/counter';
import Form from './componentes/nameForm';
import Contador from './componentes/contator';
import Calculadora from './componentes/compcalculadora';
import Items from './componentes/compitens';


function App() {
  return (
    <div className="App">
      <Contador/>
      <Counter/>
      <Form/>
      <Calculadora/>
      <Items />
    </div>
  );
}

export default App;
