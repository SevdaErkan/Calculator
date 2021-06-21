import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   const operations = ["+", "-", "/", "*"];

   const [firstNum, setFirstNum] = useState("");
   const [secondNum, setSecondNum] = useState("");
   const [operation, setOperation] = useState("");

   const [result, setResult] = useState(null);
   useEffect(() => {
      console.log(result, "result");
      console.log(firstNum, "first");
      console.log(secondNum, "s");
   }, [result, firstNum, secondNum]);
   const clickNumbers = (val) => {
      if (operation == "") {
         setFirstNum(firstNum + val);
      } else {
         setSecondNum(secondNum + val);
      }
   };

   const clickOP = (val) => {
      setOperation(val);
   };
   const reset = () => {
      setResult(null);
      setOperation("");
   };

   const showResult = () => {
      switch (operation) {
         case "+":
            setResult(Number(firstNum) + Number(secondNum));
            break;
         case "-":
            setResult(Number(firstNum) - Number(secondNum));
            break;
         case "*":
            setResult(Number(firstNum) * Number(secondNum));
            break;
         case "/":
            setResult(Number(firstNum) / Number(secondNum));
            break;

         default:
            "no operations";
      }
      setFirstNum("");
      setSecondNum("");
   };

   return (
      <div className="App">
         <div className="calculator">
            <div className="display">
               <h1>
                  {" "}
                  {result != null
                     ? result
                     : secondNum > 0
                     ? secondNum
                     : secondNum === ""
                     ? firstNum
                     : ""}
               </h1>
            </div>
            <div id="buttons">
               <div className="left">
                  <div className="btn-container">
                     <div id="enter" onClick={showResult}>
                        Enter
                     </div>
                     <div id="enter" onClick={reset}>
                        Clear
                     </div>
                  </div>
                  <div className="numbers">
                     {nums.map((n, i) => (
                        <div
                           className="num"
                           key={i}
                           onClick={() => clickNumbers(n)}
                        >
                           {n}
                        </div>
                     ))}
                  </div>
               </div>
               <div className="left">
                  {operations.map((op, key) => {
                     return (
                        <div
                           id="operations"
                           key={key}
                           onClick={() => clickOP(op)}
                        >
                           {op}
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}
