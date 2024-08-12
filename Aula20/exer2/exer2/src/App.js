
import './App.css';
import Login from './componente1';
import Input1 from './componente2';
import Input2 from './componente3';
import Button from './componente4';


function App() {
  return (
    <div className="containerMain" >

    <div className = "Container">

    <div className ="Login">
      < Login name = "Login" /></div> 

    <div className = "usuario" >
      <h2>Username</h2>
      <Input1 name="Username" />
      <h2>Password</h2>
      <Input2 name="Password" />
      </div >

    <div className="Button">
      <Button name="Login" />
    </div>

    </div>
    </div>
  );
}




export default App;
