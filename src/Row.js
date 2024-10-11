import Square from "./Square";
function Row({row,currentAttempt,handleSquareChange }){

    return ( <div id="row" className='row'  >
        <Square row={row} column="1" attempt={currentAttempt} textUpdate={(e) =>handleSquareChange(e)}></Square>
        <Square row={row} column="2" attempt={currentAttempt} textUpdate={(e) =>handleSquareChange(e)}></Square>
        <Square row={row} column="3" attempt={currentAttempt} textUpdate={(e) =>handleSquareChange(e)}></Square>
        <Square row={row} column="4" attempt={currentAttempt} textUpdate={(e) =>handleSquareChange(e)}></Square>
        <Square row={row} column="5" attempt={currentAttempt} textUpdate={(e) =>handleSquareChange(e)}></Square>
        </div>);
}

export default Row;