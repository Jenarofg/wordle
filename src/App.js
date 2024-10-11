import './App.css';
import {useState} from 'react'
import Row from './Row'

export const solution ='CLASE';

const replaceAt=function(cadena, index, char) {
  var a = cadena.split("");
  a[index] = char;
  return a.join("");
}



function App() {
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [messageWinner, setMessageWinner] = useState("");

  var num_columns=5
  var num_rows=6

  const guesses = ["     ", "     ","     " , "     ", "     "];

  const handleSquareChange=(parameters) =>
    {
     
      guesses[parameters.row-1]= replaceAt(guesses[parameters.row-1], parameters.column-1,parameters.letter);
      let isAttempComplete=true;
      for(let i=0;i<5;i++)
      {
        if(guesses[parameters.row-1].charAt(i)===" ")
          {
            isAttempComplete=false;
            break;
          }
      }
      if (isAttempComplete)  
        {
          if(guesses[parameters.row-1] === solution)
          {
            setMessageWinner("ENHORABUENA HAS ACERTADO LA PALABRA");
            setCurrentAttempt(10); 
          }
          else 
          {
            if (currentAttempt<num_rows) 
              {
                setCurrentAttempt(currentAttempt+1);

              } 
              else
              {
                setMessageWinner("Game Over");
                setCurrentAttempt(10); 
              }
          }
        }   
    }



  return (
    <div className="App">
      <header className="App-header">
        <p>
          WORDLE
        </p>
        <p>
          {messageWinner}
        </p>
      </header>

        <div className='board'>
          <Row row="1" currentAttempt={currentAttempt} handleSquareChange={(e) =>handleSquareChange(e)}></Row>
          <Row row="2" currentAttempt={currentAttempt} handleSquareChange={(e) =>handleSquareChange(e)}></Row>
          <Row row="3" currentAttempt={currentAttempt} handleSquareChange={(e) =>handleSquareChange(e)}></Row>
          <Row row="4" currentAttempt={currentAttempt} handleSquareChange={(e) =>handleSquareChange(e)}></Row>       
          <Row row="5" currentAttempt={currentAttempt} handleSquareChange={(e) =>handleSquareChange(e)}></Row>
        </div>       
    </div>
);
}

export default App;