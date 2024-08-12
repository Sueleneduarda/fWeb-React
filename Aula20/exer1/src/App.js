
import './App.css';
import './componets/componente1.css';
import './componets/componente2.css';
import './componets/componente3.css';

import Place from './componets/componente1';
import Input from './componets/componente2';
import Button from './componets/componente3';

function App() {
  return (
    <div className="Container">
      <Place name = "Artes"/>
      <Input nome = "Artes"/>
      <Button name= "Busca"/>
    </div>
  );
}

export default App;
