export function FormulaScreen(props) {
    
    // let result;
    // let formulaOutput;
    // if (props.formula.slice(-1) === "="){
    //     const formula = props.formula.substring(0, props.formula.length-1);
    //     result = eval(formula);
    //     formulaOutput = props.formula+result; 
    // }
    
    return (<div>
               {props.formula}
           </div>)
}