import { useState } from "react";
import{Link} from 'react-router-dom';
function Counter(){
    const [counter, setCounter] = useState(1)
    function adicionarCont() {
        setCounter(counter + 1);
    }
    function diminuirCont(){
        setCounter(counter - 1);
    }

    return(
        <div>
            <div>{counter}</div>
            <button onClick={adicionarCont}>Adicionar</button>
            <button onClick={diminuirCont}>Diminuir</button>
            <Link to='/items'>Pagina Items </Link>
        </div>
    );
}
export default Counter;