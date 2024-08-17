
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Counter from './componetes/pagecounter';
import Calculadora from './componetes/pageCalc';
import Items from './componetes/pageitems';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Calculadora/>}></Route>
      <Route path='/contador'element={<Counter/>}></Route>
      <Route path='/items'element={<Items/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;