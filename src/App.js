import freecodecampLogo from './images/freecodecamp-logo.png'
import './App.css';
import Button from './componentes/button'
import Screen from './componentes/screen'
import ButtonClear from './componentes/clear'
import { useState } from 'react';
import { evaluate } from 'mathjs'


function App() {

  const [input, setInput] = useState('');

  const AddInput = val => {
    setInput(input + val)
  };

  const calculateResult = () => {

    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please enter valid values");

    }

  }
  return (

    <div className='App'>
      <div className='freecodecamp-logo-container'>

        <img
          src={freecodecampLogo}
          className='freecodecamp-logo'
          alt='Logo FreeCodeCamp' />

      </div>
      <div className='calculator-container'>

        <Screen input={input} />

        <div className='fila'>
          <Button manageClic={AddInput}>1</Button>
          <Button manageClic={AddInput}>2</Button>
          <Button manageClic={AddInput}>3</Button>
          <Button manageClic={AddInput}>+</Button>
        </div>
        <div className='fila'>

          <Button manageClic={AddInput}>4</Button>
          <Button manageClic={AddInput}>5</Button>
          <Button manageClic={AddInput}>6</Button>
          <Button manageClic={AddInput}>-</Button>

        </div>


        <div className='fila'>

          <Button manageClic={AddInput}>7</Button>
          <Button manageClic={AddInput}>8</Button>
          <Button manageClic={AddInput}>9</Button>
          <Button manageClic={AddInput}>*</Button>


        </div>

        <div className='fila'>

          <Button manageClic={calculateResult}>=</Button>
          <Button manageClic={AddInput}>0</Button>
          <Button manageClic={AddInput}>.</Button>
          <Button manageClic={AddInput}>/</Button>


        </div>

        <div className='fila'>

          <ButtonClear manageClear={() => setInput('')}>
            Clear
          </ButtonClear>

        </div>

      </div>

    </div>
  );
}

export default App;
